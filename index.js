const regex = require('regex');

if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

const dict = {
    MAT: "Math",
    BUS: "Business",
    SOC: "History",
    ENG: "English",
    IND: "Trade",
    FAM: "Life Skills",
    AGR: "Agriculture",
    SCI: "Science",
    HPE: "Health/PE",
    ART: "Art",
    FOR: "Foreign Language"
}

class Course {
    constructor(coursename = null, courseid = null, gradelevels = null, credits = null, length = null, format = null, fees = null, prerequisites = null, corequisite = null, subsequent = null, considerations = null, description = null, studentrecommendations = null, difficulty = null, tags = []) {
        this.coursename = coursename;
        this.courseid = courseid;
        this.gradelevels = gradelevels;
        this.credits = credits;
        this.length = length;
        this.format = format;
        this.fees = fees;
        this.prerequisites = prerequisites;
        this.corequisite = corequisite;
        this.subsequent = subsequent;
        this.considerations = considerations;
        this.description = description;
        this.studentrecommendations = studentrecommendations;
        this.difficulty = difficulty;
        this.tags = tags;
    }
}

let masterObject = new Object();

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

// Read the file and print its contents.
var fs = require('fs'), filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);

    //split by newlines, as course data is split that way.
    let rawArr = data.split("\n");

    //var content = "";

    for (let i = 0; i < rawArr.length; i++) {
        const element = rawArr[i];
        const keyArr = [];

        const coursename = element.substring(
            element.indexOf("coursename: ") + 12,
            element.lastIndexOf(" courseid:")
        );

        for (let j = 0; j < element.length; j++) {
            const char = element[j];
            if (char == ":") {
                var gen = "";
                var c = 0;
                while (element[j - c] != " ") {
                    gen += element[j - c];
                    c++;
                }
                gen = reverseString(gen);
                //content += gen + ' ';

                keyArr.push(gen);
            }
        }

        let course = new Course();

        for (let j = 0; j < keyArr.length; j++) {
            let key = keyArr[j];
            if ((j + 1) != keyArr.length) {
                let value = rawArr[i].substring(
                    rawArr[i].indexOf(keyArr[j]) + keyArr[j].length,
                    rawArr[i].indexOf(keyArr[j + 1])
                );

                key = key.slice(0, -1);
                value = value.trim();
                course[key] = value;
            }
            else {
                let value = rawArr[i].substring(
                    rawArr[i].indexOf(keyArr[j]) + keyArr[j].length,
                    rawArr[i].length
                );
                key = key.slice(0, -1);
                value = value.trim();
                course[key] = value;
            }
            const data = JSON.stringify(course, null, 4);
            let title = course.coursename;

            const search = ' ';
            const replaceWith = '-';
            title = (title.split(search).join(replaceWith)).toLowerCase();

            masterObject[title] = course;

            // write JSON data to a file
            //writeJSON(title, data);

            function writeJSON(title, data) {
                
                fs.writeFileSync(`generated-data/${title}.json`, data);

                /*
                fs.writeFile(`generated-data/${title}.json`, data, (err) => {
                    if (err) {
                        throw err;
                    }
                    fs.readFile(`generated-data/${title}.json`, 'utf-8', (err, data) => {
                        if (err) {
                            throw err;
                        }
                
                        try {
                            // parse JSON object
                            JSON.parse(data.toString());
                            console.log(`${title} saved successfully with no errors.`);
                        } catch (error) {
                            writeJSON(title, data);
                            console.log(error);
                            console.log(title);
                        }
                    });
                });
                */
            }
        }

        try {
            let tag = dict[course.courseid.substring(0, 3)];
            console.log(tag);
            course.tags.push(tag);
        } catch (err) {
            //The coursid didn't have a tag :(
        }
    }

    fs.writeFileSync(`coursedata.json`, JSON.stringify(masterObject, null, 4));

});
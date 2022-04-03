import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Course from './Course';
//import reportWebVitals from './reportWebVitals';
import coursedata from './assets/coursedata.json';

const courseArr = Object.keys(coursedata);

var courseItems = courseArr.map((name) =>
  <Course name={name} />
);

ReactDOM.render(
  <React.StrictMode>
    <App classitems={<div class="parent">{courseItems}</div>}></App>
  </React.StrictMode>,
  document.getElementById('root')
);

const search = document.getElementById('searchbar');
search.addEventListener('input', filterCourses);

// This is for the search bar to reload results on enter instead of every time a new input is detected.
/* Uncomment this for the above behavior, and comment out the other event listener
  search.addEventListener('keydown', function (e) {
  if (e.code === "Enter") {
    filterArr(e);
  }
});
*/

function filterArr(e) {
  var courseItems;
  var tags = document.getElementsByClassName("tag");
  var truetags = [];

  for (let i = 0; i < tags.length; i++) {
    if (tags[i].classList.contains("tag-true")) {
      truetags.push(tags[i].id);
    }
  }
  if (!truetags.length === tags.length) {
    courseItems = courseArr.filter(name => {
      var isPresent = false;
      for (let i = 0; i < truetags.length; i++) {
        const e = truetags[i];
        if (coursedata[name].tags[0] === e) {
          isPresent = true;
        }
      }

      return (isPresent ? true : false);

    });
  }

  var key = search.value.toLowerCase();
  key = key.replaceAll(' ', '-');
  if (key !== "") {
    courseItems = courseArr.filter(name => (name.search(key) !== -1)).map((name) =>
      <Course name={name} />
    );
  } else {
    courseItems = courseArr.map((name) =>
      <Course name={name} />
    );

    ReactDOM.render(
      <React.StrictMode>
        <App classitems={<div class="parent">{courseItems}</div>}></App>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }



  ReactDOM.render(
    <React.StrictMode>
      <App classitems={<div class="parent">{courseItems}</div>}></App>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

function filterCourses(e) {
  var courseItems = courseArr;
  var tags = document.getElementsByClassName("tag");
  var truetags = [];

  //#region tagManager
  // Find out what tags are enabled and add them to an array
  for (let i = 0; i < tags.length; i++) {
    if (tags[i].classList.contains("tag-true")) {
      truetags.push(tags[i].id);
    }
  }

  console.log(truetags.length);
  console.log(tags.length);

  if (truetags.length !== tags.length) {
    courseItems = courseItems.filter(id => {
      var isPresent = false;
      for (let i = 0; i < truetags.length; i++) {
        const e = truetags[i];
        if (coursedata[id].tags[0] === e) {
          isPresent = true;
        }
      }
      return (isPresent ? true : false);
    });
  }
  //#endregion


  courseItems = courseItems.map((name) =>
    <Course name={name} />
  );
  ReactDOM.render(
    <React.StrictMode>
      <App classitems={<div class="parent">{courseItems}</div>}></App>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
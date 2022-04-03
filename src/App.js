import user from "./assets/user.jpg";
import "./App.css";
import coursedata from "./data/coursedata.json";

function App(props) {
    function tagToggle(id) {
        var tag = document.getElementById(id);
        if (tag.classList.contains("tag-true")) {
            tag.classList.remove("tag-true");
            let firstChild = tag.firstChild;
            firstChild.classList.add("hide");
        } else {
            tag.classList.add("tag-true");
            let firstChild = tag.firstChild;
            firstChild.classList.remove("hide");
        }
    }

    return (
        <div className="App">
            <div class="container">
                <div class="navigation">
                    <ul>
                        <li>
                            <a href="#">
                                <span class="icon">
                                    <ion-icon name="school-outline"></ion-icon>
                                </span>
                                <span class="title">Course Inspector</span>
                            </a>
                        </li>
                        <li class="hovered">
                            <a href="#">
                                <span class="icon">
                                    <ion-icon name="search-outline"></ion-icon>
                                </span>
                                <span class="title">Search All</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon">
                                    <ion-icon name="calculator-outline"></ion-icon>
                                </span>
                                <span class="title">Math</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon">
                                    <ion-icon name="earth-outline"></ion-icon>
                                </span>
                                <span class="title">History</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon">
                                    <ion-icon name="brush-outline"></ion-icon>
                                </span>
                                <span class="title">Art</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon">
                                    <ion-icon name="flask"></ion-icon>
                                </span>
                                <span class="title">Science</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon">
                                    <ion-icon name="musical-notes-outline"></ion-icon>
                                </span>
                                <span class="title">Music</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon">
                                    <ion-icon name="business-outline"></ion-icon>
                                </span>
                                <span class="title">Business</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon">
                                    <ion-icon name="construct-outline"></ion-icon>
                                </span>
                                <span class="title">Trade</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="main">
                <div class="topbar">
                    <div class="toggle">
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>
                    <div class="search">
                        <label>
                            <input
                                id="searchbar"
                                type="text"
                                name="search"
                                placeholder="Search for classes..."
                            ></input>
                            <ion-icon name="search-outline"></ion-icon>
                        </label>
                    </div>

                    <div class="user">
                        <img src={user}></img>
                    </div>
                </div>
                <div class="tag-container">
                    <button
                        id="MAT"
                        class="tag tag-true"
                        onClick={() => tagToggle("MAT")}
                    >
                        <ion-icon name="checkmark-outline"></ion-icon>
                        <p>Math</p>
                    </button>
                    <button
                        id="ENG"
                        class="tag tag-true"
                        onClick={() => tagToggle("ENG")}
                    >
                        <ion-icon name="checkmark-outline"></ion-icon>English
                    </button>
                    <button
                        id="MUS"
                        class="tag tag-true"
                        onClick={() => tagToggle("MUS")}
                    >
                        <ion-icon name="checkmark-outline"></ion-icon>Music
                    </button>
                    <button
                        id="SCI"
                        class="tag tag-true"
                        onClick={() => tagToggle("SCI")}
                    >
                        <ion-icon name="checkmark-outline"></ion-icon>Science
                    </button>
                    <button
                        id="BUS"
                        class="tag tag-true"
                        onClick={() => tagToggle("BUS")}
                    >
                        <ion-icon name="checkmark-outline"></ion-icon>Business
                    </button>
                    <button
                        id="ART"
                        class="tag tag-true"
                        onClick={() => tagToggle("ART")}
                    >
                        <ion-icon name="checkmark-outline"></ion-icon>Art
                    </button>
                    <button
                        id="IND"
                        class="tag tag-true"
                        onClick={() => tagToggle("IND")}
                    >
                        <ion-icon name="checkmark-outline"></ion-icon>Trade
                    </button>
                    <button
                        id="SOC"
                        class="tag tag-true"
                        onClick={() => tagToggle("SOC")}
                    >
                        <ion-icon name="checkmark-outline"></ion-icon>History
                    </button>
                </div>
                <div id="course-container">{props.classitems}</div>
            </div>
        </div>
    );
}

export default App;

//                    <button id="foreign" class="tag tag-true" onClick={() => tagToggle("foreign")}><ion-icon name="checkmark-outline"></ion-icon>Foreign Languange</button>

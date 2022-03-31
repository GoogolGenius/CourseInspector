import logo from './logo.svg';
import './App.css';
import coursedata from './data/coursedata.json'

function App(props) {
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
                        <li>
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
                            <input type="text" placeholder="Search for classes..."></input>
                            <ion-icon name="search-outline"></ion-icon>
                        </label>
                    </div>

                    <div class="user">
                        <img src="src\assets\person-outline.svg"></img>
                    </div>
                </div>
                <div id="course-container">{props.classitems}</div>
            </div>
        </div>
    );
}

export default App;
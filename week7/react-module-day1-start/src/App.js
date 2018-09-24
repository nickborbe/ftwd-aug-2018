import React, { Component } from "react";
import Other from "./Other"
import "./App.css";


class App extends Component {
  render() {
    return (
        <div>

            <div className="App">
                <h1 className="title"> Hello Ironhackers! </h1>
            </div>


            <div className="wow">
                <Other></Other>
            </div>

            <div>
                <h3>List of Animals</h3>
                <ul>
                    <li> Dog</li>
                    <li>cat</li>
                    <li>Alligator</li>
                </ul>
                wow
            </div>
            
        </div>
    );
  }
}

export default App;
// components/Projects.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import allTheProjects from '../data.json';


class Projects extends Component {
    render(){

        return (
            <div>
            <h2>Projects:</h2>
            {allTheProjects.map((eachProject, index) => {
                return (
                <div key={eachProject.id}>
                    <h3>
                    <Link to={`/ourprojects/${eachProject.id}`}>{eachProject.name}</Link>
                    </h3>

                    <h4>{eachProject.technologies}</h4>
                    <hr />
                </div>
                )
            })}
        </div>
        )
    }
}


export default Projects;
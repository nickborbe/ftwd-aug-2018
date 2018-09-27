// components/ProjectDetails.js

import React, { Component } from 'react';
import allTheProjects from '../data.json';



const projectDetails = (props) => {

    const getProject = (id) => {
        return allTheProjects.find((oneProject)=>{
          return  oneProject.id == id
        })
      };


    const theActualProject = getProject(props.match.params.id);

    
    return (
        <div>
           <p>
               Hi this is the project details page
            </p>
             
            {theActualProject.name}
        </div>
    )


}    

export default projectDetails;
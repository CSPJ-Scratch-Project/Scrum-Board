import React, { useState } from 'react';
import {Project} from './Project.jsx'

export const ProjectContainer = () => {
    const [numProjects, setNumProjects] = useState(4);
    const arrContainer = [];
    for (let i = 0; i<numProjects; i++){ //hardcoding number of projects
        arrContainer.push(
            <div id = 'project-sidebar'>
                <Project id = {`${i+1}`}/> 
            </div>
        )
    }
    
    const handleAddProject = () => { //add function for onClick event 
        setNumProjects(numProjects + 1);
        arrContainer.push(
          <div id="project-sidebar">
            <Project id={`${numProjects + 1}`} />
          </div>
        );
    };

    return (<div>
        HelloHelloHello
        <div className="projectContainer">
            {arrContainer}
        </div>
        <button onClick={handleAddProject}>Add Project</button>
    </div>)
}

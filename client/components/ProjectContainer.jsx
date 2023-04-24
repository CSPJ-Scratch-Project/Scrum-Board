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

    return (<div className = "outer" style = {{border: '1px solid black', width: '455px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className="topBarContainer" style = {{display: 'flex', border: '3px solid yellow', width: '100%'}}>
            {/* <div className="topLeftContainer">        
            </div> */}
            <div className = "topLeftContainer" style = {{width: '100%', height: '100%', border: '3px solid red', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div id="image-container" style ={{
                    width: '50%',
                    height: '100px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '3px solid black',
                    marginTop: '10px'
                    }}>
                </div>
                <form style={{textAlign: 'center'}}>
                    <input type="file" id="image-upload" style={{display: "block", margin: '10px 0px 10px 0px', marginLeft: '60px'}}/>
                </form>
            </div>
            <div style = {{width: '100%', border: '3px solid green', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                User 1
            </div>
        </div>
        
        <div className="projectContainer" style = {{overflowY: 'auto', height: '700px', width: '450px', border: '3px solid black', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            {arrContainer}
        </div>
        <button  style = {{width: '100px', height: '50px'}} onClick={handleAddProject}>add new +</button>
    </div>)
}

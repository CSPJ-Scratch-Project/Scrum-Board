import React, { useEffect, useState, createContext } from 'react'

/* 
a context in react is component that allows all of its children (all the way down to the lowest level children) 
components to have access to the data that the parent has access to (no prop drilling needed) 

this context will wrap the our App component which means our entire app will have access
to the data that App grabs (the information fetched from the database)
*/

const ProjectContext = createContext(null);

const ProjectContextProvider = ({ children }) => {
  //hook to store user project data that is returned from call to backend
  const [ userProjects, setUserProjects ] = useState({});
  const [ userTasks, setUserTasks ] = useState({});

  //runs only on first render
  useEffect(() => {
    const projectEndpoint = 'http://localhost:3000/projects/5'
    //unfinished***
    const fetchUserProjects = async () => {
      try {
        //make call to backend endpoint that will request user project data
        const response = await fetch(projectEndpoint);
        const jsonResult = await response.json();

        //test log
        console.log('jsonResult is ', jsonResult);
        
        //store user project data in our state
        setUserProjects(jsonResult);
      }
      catch (error) {
        console.log('ERROR: ', error);
      }
    }
    const taskEndpoint = 'http://localhost:3000/tasks/5'
    //unfinished***
    const fetchUserTasks = async () => {
      try {
        //make call to backend endpoint that will request user task data
        const response = await fetch(taskEndpoint);
        const jsonResult = await response.json();

        //test log
        console.log('jsonResult is ', jsonResult);
        
        //store user task data in our state
        setUsertasks(jsonResult);
      }
      catch (error) {
        console.log('ERROR: ', error);
      }
    }
  },[])

  return (
    <ProjectContext.Provider value={{ playlists, token }}>
      { children }
    </ProjectContext.Provider>)
}

export { ProjectContext, ProjectContextProvider }
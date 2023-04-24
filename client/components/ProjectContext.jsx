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

  //runs only on first render
  useEffect(() => {
    //unfinished***
    const fetchUserProjects = async () => {
      try {
        //make call to backend endpoint that will request user project dataa
        const response = await fetch(endpoint);
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
  },[])

  return (
    <ProjectContext.Provider value={{ playlists, token }}>
      { children }
    </ProjectContext.Provider>)
}

export { ProjectContext, ProjectContextProvider }
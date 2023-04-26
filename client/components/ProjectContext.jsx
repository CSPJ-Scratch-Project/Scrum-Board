import React, { useEffect, useState, createContext } from 'react';

/* 
a context in react is component that allows all of its children (all the way down to the lowest level children) 
components to have access to the data that the parent has access to (no prop drilling needed) 

this context will wrap the our App component which means our entire app will have access
to the data that App grabs (the information fetched from the database)
*/

const ProjectContext = createContext(null);

const ProjectContextProvider = ({ children }) => {
  console.log('project context here');
  //hook to store user project data that is returned from call to backend
  const [userProjects, setUserProjects] = useState([
         // default     update (arg is prev state)
         // below is the default
    { id: 1, content: 'scrum board' },
  ]);
  const [userTasks, setUserTasks] = useState([]);

  //runs only after first render due to the empty array [] in the second arguement;
  useEffect(() => {
    const projectEndpoint = 'http://localhost:3000/projects/5';
    const fetchUserProjects = async () => {
      try {
        //make call to backend endpoint that will request user project data
        const response = await fetch(projectEndpoint, {
          mode: 'cors',
        });
        const jsonResult = await response.json();

        //test log
        console.log('jsonResult for project data is ', jsonResult);

        // update / store user project data in our state
        setUserProjects(jsonResult);
      } catch (error) {
        console.log('ERROR: ', error);
      }
    };

    // ------------------------USER TASKS ------------------------------------------------

    const taskEndpoint = 'http://localhost:3000/tasks/all';
    const fetchUserTasks = async () => {
      try {
        //make call to backend endpoint that will request user task data
        const response = await fetch(taskEndpoint, {
          mode: 'cors',
        });
        const jsonResult = await response.json();

        //test log
        // console.log('jsonResult for task data is ', jsonResult);

        //store user task data in our state
        setUserTasks(jsonResult);
      } catch (error) {
        console.log('ERROR: ', error);
      }
    };
    fetchUserProjects();
    fetchUserTasks();
  }, []);

  return (
    <ProjectContext.Provider value={{ userProjects, userTasks }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectContextProvider };

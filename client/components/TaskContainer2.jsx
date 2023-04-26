import React, { useState, useContext, useEffect } from 'react';
import { ProjectContext } from './ProjectContext.jsx';
import './TaskContainer.css';
import { Box } from "@material-ui/core";
import TaskColumn from './TaskColumn.jsx';
//import Task from './Task.jsx';

export const TaskContainer2 = () => {
  // import userTasks from project context
  const { userTasks } = useContext(ProjectContext);
  console.log(`TASKCONTAINER2 type:`, Array.isArray(userTasks));
  console.log(`TASKCONTAINER2 userTasks:`, userTasks);
  console.log(`TASKCONTAINER2 type:`, Array.isArray(userTasks));


  // initiate local state of array of task columns
  const [taskColArr, setTaskColArr] = useState([]);
  return (
    // style={{display: flex, flex-direction
    <div className='columns-container' > 
      <div id='col-1'>
        <div className="columns-title">
          New
        </div>
        <TaskColumn status={1} {...{ taskColArr, setTaskColArr, }}/>
      </div>
      <div id='col-2'>
        <div className="columns-title">
          In Progress
        </div>
        <TaskColumn status={2} {...{ taskColArr, setTaskColArr, }}/>
      </div>
      <div id='col-3'>
        <div className="columns-title">
          Completed
        </div>
        <TaskColumn status={3}  {...{ taskColArr, setTaskColArr, }}/>
      </div>
    </div>
  );
};

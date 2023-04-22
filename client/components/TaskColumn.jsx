import React, { useState, useEffect } from 'react'
// import Button from '@mui/material/Button';
import Task from './Task.jsx';

const TaskColumn = ({ taskInfo, id, name }) => {
  //create local state for number of tasks
  const [ tasks, setTasks ] = useState([]);
  
  //function to create a task when the new task button is clicked
  const taskCreator = () => {
    setTasks(tasks.concat(<Task taskInfo={taskInfo} key={tasks.length} />));
    console.log('tasks is ', tasks);
  }

  //to run on initial render
  useEffect(() => {
    
  }, []);

  return (
    <>
      <div>{name}</div>
      <div>
        <div>taskcolumn</div>
        {tasks}
        <button onClick={taskCreator}>New Task</button>
        {/* <Button variant="contained" 
              sx={{ m: 1.5,
                boxShadow: 1,
                fontSize: 20, 
                background: '#6a8f8b',
                ":hover": {
                  bgcolor: "#4b6260",
                }}}
              onClick={taskCreator}>New Task</Button> */}
      </div>
    </>
  );
}

export default TaskColumn
import React, { useState, useEffect, useContext } from 'react';
// import Button from '@mui/material/Button';
import { ProjectContext } from './ProjectContext.jsx';
import Task from './Task.jsx';
import './TaskColumn.css';
import {
  DragDropContext,
  Droppable,
  Draggable,
} from 'react-beautiful-dnd';

const TaskColumn = ({ taskInfo, id, name }) => {
  //create local state for number of tasks
  const { userTasks } = useContext(ProjectContext);

  const [tasks, setTasks] = useState([]);

  //function to create a task when the new task button is clicked
  const taskCreator = () => {
    setTasks(
      tasks.concat(<Task taskInfo={taskInfo} key={tasks.length} />)
    );
    // console.log('tasks is ', tasks);
  };
  
  //
  const taskRender = () => {
    const taskList = [];
    for(let i = 0; i < userTasks.length; i++){
      taskList.push(<Task taskName={userTasks[i].task_name} status={userTasks[i].status} key={i} />);
    }
  
    setTasks(taskList);
  };

  //to run on changes to the second argument (state); needs this to render
  useEffect(() => {
    setTasks(userTasks);
    taskRender();
  }, [userTasks]);

  // console.log('tasks is ', tasks);
  return (
    <div className="@column">
      <div>{name}</div>

      <div
        className="tasksBox"
        style={{ maxHeight: 400, overflowY: 'auto' }}
      >
        {tasks}
      </div>

      <div>
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
    </div>
  );
};

export default TaskColumn;

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Task from './Task';

const TaskColumn = () => {
  //create local state for number of tasks
  const [taskAmount, setTaskAmount] = useState({ amount: 0 });

  //array to hold the tasks in the column
  const tasks = [];

  //function to create a task when the new task button is clicked
  const taskCreator = () => {
    tasks.push(<Task />);
  };

  return (
    <div>
      <div>taskcolumn</div>
      {tasks}
      <AddNewTask />
      <Button
        variant="contained"
        sx={{
          m: 1.5,
          boxShadow: 1,
          fontSize: 20,
          background: '#6a8f8b',
          ':hover': {
            bgcolor: '#4b6260',
          },
        }}
        onClick={taskCreator}
      >
        New Task
      </Button>
    </div>
  );
};

export default TaskColumn;

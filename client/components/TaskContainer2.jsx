import React, { useState } from 'react';
import './TaskContainer.css';
import TaskColumn from './TaskColumn.jsx';
//import Task from './Task.jsx';

export const TaskContainer2 = () => {

  return (
    <div>
      <div>
        <div classname="column-title">
          New
        </div>
        <TaskColumn/>
      </div>
      <div>
        <div classname="column-title">
          In Progress
        </div>
        <TaskColumn/>
      </div>
      <div>
        <div classname="column-title">
          Completed
        </div>
        <TaskColumn/>
      </div>
    </div>
  );
};

import React from 'react';
import './TaskContainer.css';
import TaskColumn from './TaskColumn.jsx';

export const TaskContainer = ({project}) => {
  console.log('entering task container');
  const taskColumnsArr = [];
  for (let i = 0; i < 3; i++) {
    const columnName = i === 0 
      ? "New" 
      : i === 1 
      ? "In Progress" 
      : "Completed";
    // taskColumnsArr.push(<div>Column</div>)
    taskColumnsArr.push(
      <div id={`col-${i+1}`}>
        <TaskColumn 
        taskInfo={taskInfo}
        key={`taskCol${i+1}`} 
        id={`taskCol${i+1}`}
        name={columnName}
      />
      </div>)
  }
  return (
    <div className={"taskColumns-container"}>
      <div className="projectName">test</div>
      {/* <div className="projectName">{project.name} </div> */}
      <div className="columns-container">
        {taskColumnsArr}
      </div>
    </div>
  )
}
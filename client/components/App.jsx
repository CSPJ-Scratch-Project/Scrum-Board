import React, { useContext } from 'react';
import { TaskContainer } from './TaskContainer.jsx';
import { ProjectContainer } from './ProjectContainer.jsx';
// once we get styling
// import './App.css'

export const App = () => {
  return (
    <>
      <div>test</div>
      <div>
        <ProjectContainer />
      </div>
      <div>
        <TaskContainer />
      </div>
    </>
  );
};

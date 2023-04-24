import React, { useContext } from 'react';
import { TaskContainer } from './TaskContainer.jsx';
import { ProjectContainer } from './ProjectContainer.jsx';
import '@atlaskit/css-reset';
import './App.css';

export const App = () => {
  return (
    <div className="container">
      <div>
        <ProjectContainer />
      </div>
      <div>
        <TaskContainer />
      </div>
    </div>
  );
};

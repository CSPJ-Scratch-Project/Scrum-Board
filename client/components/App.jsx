import React, { useContext } from 'react';
import { TaskContainer } from './TaskContainer.jsx';
import { ProjectContainer } from './ProjectContainer.jsx';
import '@atlaskit/css-reset';
import './App.css';
import { ProjectContext } from './ProjectContext.jsx';

export const App = () => {
  console.log('app.jsx here');
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

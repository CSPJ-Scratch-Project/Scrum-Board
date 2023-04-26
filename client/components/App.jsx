import React, { useContext } from 'react';
import { TaskContainer } from './TaskContainer.jsx';
import { TaskContainer2 } from './TaskContainer2.jsx';
import { ProjectContainer } from './ProjectContainer.jsx';
import '@atlaskit/css-reset';
import './App.css';
import { ProjectContext } from './ProjectContext.jsx';

//this app renders on the index.jsx
//it is wrapped in the index.jsx in the ProjectContextProvider which allows it access to state, as well as any children
export const App = () => {
  console.log('app.jsx here');
  return (
    <div className="container">
      <div>
        <ProjectContainer />
      </div>
      <div>
        <TaskContainer2/>
      </div>
    </div>
  );
};

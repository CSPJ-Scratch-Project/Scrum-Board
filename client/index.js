import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App.jsx';
import { ProjectContextProvider } from './components/ProjectContext.jsx';

render(
  <ProjectContextProvider>
    <App />
  </ProjectContextProvider>,
  document.getElementById('root')
);

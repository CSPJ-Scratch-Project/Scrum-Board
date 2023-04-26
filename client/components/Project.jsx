import React, { useState } from 'react';
import './Project.css';

export const Project = ({ content, items, setItems, index, id }) => {
  const [toggleTitle, setToggleTitle] = useState(true);
  const [taskTitle, setTaskTitle] = useState(content);
  // console.log('props.id: ', props.id);
  return (
    <div className="projectContainer">
      <div className="projectContent">
        {/* double click on text to edit */}
        {toggleTitle ? (
          <p
            onDoubleClick={() => {
              setToggleTitle(false);
            }}
          >
            {taskTitle}
          </p>
        ) : (
          <input
            type="text"
            value={taskTitle}
            onChange={event => {
              setTaskTitle(event.target.value);
            }}
            // potential future change for an update request to backend to ensure new project titles are saved
            //below vvv
            onBlur={() => {
              setToggleTitle(true);
            }}
            onKeyDown={event => {
              if (event.key === 'Enter' || event.key === 'Escape') {
                setToggleTitle(true);
                event.preventDefault();
                event.stopPropagation();
              }
            }}
          />
        )}
      </div>
          {/* delete button, it works! */}
      <div>
        <button
          type="button"
          onClick={() => {
            setItems(items.filter(el => el.id != id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

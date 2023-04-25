import React, { useState } from 'react';
import './Project.css';

export const Project = ({ content, items, setItems, index, id }) => {
  const [toggleTitle, setToggleTitle] = useState(true);
  const [taskTitle, setTaskTitle] = useState(content);
  // console.log('props.id: ', props.id);
  return (
    <div className="projectContainer">
      <div className="projectContent">
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

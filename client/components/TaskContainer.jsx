import React, { useState } from 'react';
import './TaskContainer.css';
import TaskColumn from './TaskColumn.jsx';
import Task from './Task.jsx';
import {
  DragDropContext,
  Droppable,
  Draggable,
} from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';

// FIXME: hardcoded for now
const taskInfo = 'this is task info';
// fake data generator

//this is a spot that we can start on
//what is the purpose of this?

//creates an array of all tasks, but this belongs in the task column component
//if you want the demo to display, uncomment the below 5 lines
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `Task ${k + offset}`,
  }));

// reorder a list after adding
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// Moves an item from one list to another list.

//this is also meant to be in the columns rather than in the task container
const move = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 8; // gap for spacing

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: '80%',
});


//this is some hard coded rendering for the demo
export const TaskContainer = ({ project }) => {

  //potentially this is where we would render the items with getItems from the Project Context
  //task rendering goes into Task Column
  const [state, setState] = useState([
    getItems(3),
    getItems(2, 3),
    getItems(1, 5),
  ]);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter(group => group.length));
    }
  }

  // FIXME: need
  // const handleAddTask = ind => {
  //   const items = state[ind];
  //   const newTask = {
  //     id: uuid(), // generate a unique ID for the new project
  //     content: `Task ${items.length + 1}`,
  //   };
  //   const newState = [...state];
  //   const updatedItems = [...items, newTask]; // add the new project to the items array
  //   newState[ind] = updatedItems;
  //   setState(newState);
  // };

  return (
    <div style={{ background: '#577D86', height: '100vh' }}>
      <div className="taskColumns-container ">
        <div className="projectName">Current Project</div>
        <div className="columnNamesRow">
          <div>New</div>
          <div>In Progress</div>
          <div>Completed</div>
        </div>
        <div className="columns-container">
          <DragDropContext onDragEnd={onDragEnd}>
            {state.map((el, ind) => (
              <Droppable key={ind} droppableId={`${ind}`}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                  >
                    {el.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <Task
                              content={item.content}
                              key={index}
                              state={state}
                              setState={setState}
                              ind={ind}
                              index={index}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </DragDropContext>
        </div>
        <div className="buttonRow">
          <div>
            <button
              style={{ width: '100px', height: '50px', marginTop: '2rem' }}
              onClick={() => {
                const items = state[0];
                const newTask = {
                  id: uuid(), // generate a unique ID for the new project
                  content: `Task ${items.length + 1}`,
                };
                const newState = [...state];
                const updatedItems = [...items, newTask]; // add the new project to the items array
                newState[0] = updatedItems;
                setState(newState);
              }}
            >
              New Task
            </button>
          </div>
          <div>
            <button
              style={{ width: '100px', height: '50px', marginTop: '2rem' }}
              onClick={() => {
                const items = state[1];
                const newTask = {
                  id: uuid(), // generate a unique ID for the new project
                  content: `Task ${items.length + 1}`,
                };
                const newState = [...state];
                const updatedItems = [...items, newTask]; // add the new project to the items array
                newState[1] = updatedItems;
                setState(newState);
              }}
            >
              New Task
            </button>
          </div>
          <div>
            <button
              style={{ width: '100px', height: '50px', marginTop: '2rem' }}
              onClick={() => {
                const items = state[2];
                const newTask = {
                  id: uuid(), // generate a unique ID for the new project
                  content: `Task ${items.length + 1}`,
                };
                const newState = [...state];
                const updatedItems = [...items, newTask]; // add the new project to the items array
                newState[2] = updatedItems;
                setState(newState);
              }}
            >
              New Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// export const TaskContainer = ({ project }) => {
//   console.log('entering task container');
//   const taskColumnsArr = [];
//   // create column names
//   for (let i = 0; i < 3; i++) {
//     const columnName =
//       i === 0 ? 'New' : i === 1 ? 'In Progress' : 'Completed';
//     taskColumnsArr.push(
//       <div id={`col-${i + 1}`}>
//         <TaskColumn
//           // taskInfo={taskInfo}
//           key={`taskCol${i + 1}`}
//           id={`taskCol${i + 1}`}
//           name={columnName}
//         />
//       </div>
//     );
//   }
//   return (
//
//   );
// };

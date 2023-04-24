import React, { useState } from 'react';
import './TaskContainer.css';
import TaskColumn from './TaskColumn.jsx';
import {
  DragDropContext,
  Droppable,
  Draggable,
} from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';

// fake data generator
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

export const TaskContainer = ({ project }) => {
  const [state, setState] = useState([
    getItems(5),
    getItems(4, 5),
    getItems(3, 9),
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

  // FIXME: neeed to
  const handleAddTask = items => {
    const newTask = {
      id: uuid(), // generate a unique ID for the new Task
      content: `Task ${items.length + 1}`,
    };
    //
    const updatedItems = [...items, newTask]; // add the new Task to the items array
    setItems(updatedItems);
  };

  return (
    <div style={{ background: '#577D86', height: '100vh' }}>
      <div className="taskColumns-container ">
        <div className="projectName">test</div>
        <div className="colunmNamesRow">
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
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                              }}
                            >
                              {item.content}
                              <button
                                type="button"
                                onClick={() => {
                                  const newState = [...state];
                                  newState[ind].splice(index, 1);
                                  setState(
                                    newState.filter(group => group.length)
                                  );
                                }}
                              >
                                delete
                              </button>
                            </div>
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
        <button
          style={{ width: '100px', height: '50px', marginTop: '2rem' }}
          onClick={() => {
            setItems(handleAddTask);
          }}
        >
          New Task
        </button>
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

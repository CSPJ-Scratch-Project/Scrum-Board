import React, { useState } from 'react';
import { Project } from './Project.jsx';
import {
  DragDropContext,
  Droppable,
  Draggable,
} from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid'; // creat unique id

// fake data generator

const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `Project  ${k + offset}`,
  }));

// helper function to reorder the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
const grid = 8; // gap spacing

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  display: 'flex',
  justifyContent: 'space-between',

  // change background colour if dragging
  background: isDragging ? '#87CBB9' : 'whitesmoke',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightblue',
  padding: grid,
  width: '300px',
});

export const ProjectContainer = () => {
    const [numProjects, setNumProjects] = useState(4);
    const arrContainer = [];
    for (let i = 0; i<numProjects; i++){ //hardcoding number of projects
        arrContainer.push(
            <div id = 'project-sidebar'>
                <Project id = {`${i+1}`}/> 
            </div>
        )
    }
    
    const handleAddProject = () => { //add function for onClick event 
      
        setNumProjects(numProjects + 1);
        arrContainer.push(
          <div id="project-sidebar">
            <Project id={`${numProjects + 1}`} />
          </div>
        );
  const [items, setItems] = useState(getItems(5));

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    // reorder the list
    const updatedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(updatedItems);
  }

  const handleAddProject = () => {
    const newProject = {
      id: uuid(), // generate a unique ID for the new project
      content: `Project ${items.length + 1}`,
    };

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    // reorder the list
    const updatedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(updatedItems);
  }

  const handleAddProject = () => {
    const newProject = {
      id: uuid(), // generate a unique ID for the new project
      content: `Project ${items.length + 1}`,
    };
    const updatedItems = [...items, newProject]; // add the new project to the items array
    setItems(updatedItems);
  };
  return (
    <div style={{ background: '#577D86', height: '100vh' }}>
      <div
        className="outer"
        style={{
          // border: '1px solid black',
          // width: '300px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          className="topBarContainer"
          style={{
            display: 'flex',
            border: '3px solid yellow',
            width: '300px',
          }}
        >
          {/* <div className="topLeftContainer">        
            </div> */}
          <div
            className="topLeftContainer"
            style={{
              flex: '1',
              height: '100%',
              // border: '3px solid red',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              paddingBlock: '1rem',
            }}
          >
            <div
              id="image-container"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                background: 'whitesmoke',
                // border: '3px solid black',
                marginBottom: '1rem',
              }}
            ></div>
            <div> User 1 Name</div>
            <form style={{ textAlign: 'center' }}>
              <input
                type="file"
                id="image-upload"
                style={{
                  // display: 'flex',
                  // border: '3px solid black',
                  alignContent: 'center',
                  justifyContent: 'center',
                  marginInline: '20%',
                }}
              />
            </form>
          </div>
          {/* <div
            className="topRightContainer"
            style={{
              flex: '1',
              border: '3px solid green',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          ></div> */}
        </div>

        <div
          className="projectContainer"
          style={{
            overflowY: 'auto',
            maxHeight: '400px',
            // width: '450px',
            border: '2px solid red',

            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {items.map((item, index) => (
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
                          <div>{item.content}</div>
                          <button
                            type="button"
                            onClick={() => {
                              setItems(
                                items.filter(el => el.id != item.id)
                              );
                            }}
                          >
                            delete
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            {/* {arrContainer} */}
          </DragDropContext>
        </div>
        <button
          style={{ width: '100px', height: '50px', marginTop: '2rem' }}
          onClick={() => {
            setItems(handleAddProject);
          }}
        >
          New Project
        </button>
      </div>
    </div>
  );
};

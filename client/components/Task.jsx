import React, { useState } from 'react'
import './Task.css'

const Task = ({ taskInfo, key }) => {
  // hooks for title text edit field
  const [ toggleTitle, setToggleTitle ] = useState(true);
  const [ taskTitle, setTaskTitle] = useState('Title')
  // hooks for body text edit field
  const [ toggleBody, setToggleBody ] = useState(true);
  const [ taskBody, setTaskBody] = useState('Body')

  return (
    <article className='taskBox'>

      {/* click to edit field for task title */}
      {toggleTitle 
        ? (
        <p onDoubleClick={() => {setToggleTitle(false)}} >{taskTitle}</p> ) 
        : (
        <input
          type="text"
          value={taskTitle}
          onChange={(event) => {
            setTaskTitle(event.target.value)
          }}
          onBlur={() => {
            setToggleTitle(true)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === 'Escape') {
              setToggleTitle(true)
              event.preventDefault()
              event.stopPropagation()
            }
          }}
        />
      )}

      {/* click to edit field for task body */}
      {toggleBody 
        ? (
        <p onDoubleClick={() => {setToggleBody(false)}} >{taskBody}</p> ) 
        : (
        <input
          type="text"
          value={taskBody}
          onChange={(event) => {
            setTaskBody(event.target.value)
          }}
          onBlur={() => {
            setToggleBody(true)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === 'Escape') {
              setToggleBody(true)
              event.preventDefault()
              event.stopPropagation()
            }
          }}
        />
      )}

    </article>
  )
}

export default Task
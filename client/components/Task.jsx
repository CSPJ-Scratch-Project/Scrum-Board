import React from 'react'
import './Task.css'

const Task = ({ taskInfo, key }) => {
  return (
    <article className='taskBox'>
      <h3 className='taskTitle'>task title</h3>
      <p className='taskBody'>task body</p>
    </article>
  )
}

export default Task
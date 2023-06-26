import React from 'react'
import { CompleteIcon } from './CompleteIcon.js'
import { DeleteIcon } from './CompleteIcon.js'
import './TodoItem.css'

function TodoItem(props) {
  return (
    <>
    <ul className='listas'>
      <CompleteIcon />
      {/* {<li
        className={`completed ${props.completed && 'cp__active'}`}
        onClick={props.onComplete}
      >v</li>} */}
      <h2 className={`task ${props.completed && 'cp__active--task'}`}>{props.text}</h2>
    </ul>
    <DeleteIcon />
      {/* {<span
        className='delete'
        onClick={props.onDelete}
        >x</span>} */}
    </>
  )
}

export { TodoItem };
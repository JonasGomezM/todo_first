import React from 'react'
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import './TodoItem.css'

function TodoItem(props) {
  return (
    <>
    <li className='listas'>
      <CompleteIcon completed={props.completed}
                    onComplete={props.onComplete}/>
      {/* {<li
        className={`completed ${props.completed && 'cp__active'}`}
        onClick={props.onComplete}
      >v</li>} */}
      <p className={`task ${props.completed && 'cp__active--task'}`}>{props.text}</p>
      <DeleteIcon  onDelete={props.onDelete}/>
    </li>
    

      {/*<span
        className='delete'
        onClick={props.onDelete}
        >x</span>*/}
    </>
  )
}

export { TodoItem };
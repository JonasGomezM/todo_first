import React from 'react'
import './TodoList.css'

function TodoList({ children }) {
  return (
    <ul className='lista'>
      {children}
    </ul>
  )
}

export {TodoList};
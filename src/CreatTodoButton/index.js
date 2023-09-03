import React from 'react'
import './CreatTodoButton.css'

function CreatTodoButton() {
  return (
    <button className='btn'
            onClick={(e) => {
              console.log('Diste click en el boton')
              const t = e.target;
              console.log(t);
              }}
            type="button">agregar</button>
  )
}

export {CreatTodoButton};
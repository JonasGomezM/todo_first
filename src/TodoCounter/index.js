import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed}) {
  return (
    <h1 className='counter'>
      Has completado {completed} de {total} TODOS
    </h1>
  );
}

export {TodoCounter};
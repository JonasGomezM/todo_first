import React from 'react';
import { TodoIcon } from './index.js';

function CompleteIcon( {completed, onComplete} ){
  return (
    <TodoIcon 
      type="completed"
      color={completed ? 'greenyellow' : 'gray'}
      checkOK_del={onComplete}
    />
  );
}

export { CompleteIcon };
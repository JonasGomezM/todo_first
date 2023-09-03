import React from 'react';
import { TodoIcon } from './index.js';

function DeleteIcon({onDelete}){
  return (
    <TodoIcon 
    type="delete"
    checkOK_del={onDelete}
  />
  );
}

export { DeleteIcon };
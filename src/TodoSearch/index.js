import React from 'react';
import './TodoSearch.css'

function TodoSearch( {searchValue, setSearchValue} ) {
  return (
    <input className='search'
          placeholder='task...' 
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
    />
  );
}

/*export default TodoSearch; -----> tambien se puede poner asi*/
export {TodoSearch};
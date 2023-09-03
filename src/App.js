import React, { Fragment } from 'react';
import { TodoCounter } from './TodoCounter/index.js';
import { TodoSearch } from './TodoSearch/index.js';
import { TodoList } from './TodoList/index.js';
import { TodoItem } from './TodoItem/index.js';
import { CreatTodoButton } from './CreatTodoButton/index.js';
import './App.css';

// const todoDefaults = [
//   { text: 'Create a taskkk', completed: false },
//   { text: 'Task deleted', completed: false },
//   { text: 'Task completed', completed: false },
//   { text: 'Task complete', completed: false }
// ];

//localStorage.setItem('TODOS_V1', todoDefaults);
//localStorage.removeItem('TODOS_V1', defaultTodos);
//const convertir = JSON.stringify(todoDefaults);
//localStorage.setItem('V1', JSON.stringify(todoDefaults))
//console.log(localStorage.getItem('V1'))


//CUSTOM HOOKS LOCALSTORAGE
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = newItem => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  

  const [todos, saveTodos] = useLocalStorage('V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  //console.log(`funciona y estas buscando ${searchValue}`);

  const todosCompleted = todos.filter((todo) => todo.completed === true).length;
  const todosTotal = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);
  
    if (index>=0) {
      newTodos[index].completed = !newTodos[index].completed;
      saveTodos(newTodos);
    }
  };
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text)
    console.log(index)
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };
  
  return (
    <Fragment>
      <TodoCounter completed={todosCompleted} total={todosTotal} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <CreatTodoButton />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>{completeTodo(todo.text)}}  
            onDelete={()=>{deleteTodo(todo.text)}}  
          />
        ))}
      </TodoList>
    </Fragment>
  );
}

export default App;

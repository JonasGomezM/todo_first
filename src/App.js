import React, { Fragment } from 'react';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreatTodoButton } from './CreatTodoButton.js';
import './App.css';

const todoDefaults = [
  { text: 'Create a new task', completed: false },
  { text: 'Task deleted', completed: false },
  { text: 'Task completed', completed: false },
  { text: 'Task complete', completed: false }
];

function App() {
  const [todos, setTodos] = React.useState(todoDefaults);
  const [searchValue, setSearchValue] = React.useState('');
  console.log(`funciona y estas buscando ${searchValue}`);

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
      setTodos(newTodos);
    }
  };
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(index, 1);
    setTodos(newTodos);
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

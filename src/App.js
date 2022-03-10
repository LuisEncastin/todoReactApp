import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>     
      <TodoList/>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;

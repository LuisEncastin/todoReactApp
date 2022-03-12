import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

let defaultToDos = [
  {text: "Picar cebolla", completed: true },
  {text: "Picar tomate", completed: false },
  {text: "Picar cilantro", completed: false }
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [toDos, setToDos] = React.useState(defaultToDos)

  const completedToDos = toDos.filter(toDo=>!!toDo.completed).length;
  const totalToDos = toDos.length;

  let searchedTodos = [];

  if (!searchValue.length>=1) {
    searchedTodos = toDos;
  } else {
    searchedTodos = toDos.filter(toDo => {
      const todoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
      <TodoCounter
        total ={totalToDos}
        completed = {completedToDos}/>
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue= {setSearchValue}/>     
      <TodoList>
        {searchedTodos.map(todo=><TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>)}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;

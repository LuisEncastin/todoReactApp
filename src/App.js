import React from 'react';
import { AppUI } from './AppUI'

// let defaultToDos = [
//   {text: "Picar cebolla", completed: true },
//   {text: "Picar tomate", completed: false },
//   {text: "Picar cilantro", completed: false }
// ]

function App() {
  // localStorage
  const localStorageToDos = localStorage.getItem('TODOS_V1');
  let parsedToDos;

  if (!localStorageToDos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedToDos = [];
  } else {
    parsedToDos= JSON.parse(localStorageToDos);
  }

  // State
  const [searchValue, setSearchValue] = React.useState('');
  const [toDos, setToDos] = React.useState(parsedToDos)

  // TodosInfo
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

  // Méthods to save, complete and delete todos
  // localStorage
  const saveToDos = (newToDos) => {
    const stringifiedTodos = JSON.stringify(newToDos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setToDos(newToDos);
  }

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo=>toDo.text === text);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  }

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo=>toDo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  }

  return (
    <AppUI
      totalToDos ={totalToDos}
      completedToDos = {completedToDos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeToDo= {completeToDo}
      deleteToDo= {deleteToDo}
    />
  );
}

export default App;

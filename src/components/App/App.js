import React from 'react';
import { AppUI } from './AppUI'
import { useLocalStorage } from '../utils/customHooks'

// let defaultToDos = [
//   {text: "Picar cebolla", completed: true },
//   {text: "Picar tomate", completed: false },
//   {text: "Picar cilantro", completed: false }
// ]

function App() {
  // Custom hook - localStorage
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
    } = useLocalStorage('TODOS_V1', []);

  // State
  const [searchValue, setSearchValue] = React.useState('');

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

  // useEffect

  // console.log('Render antes del use effect');

  // React.useEffect(() => {
  //   console.log('use effect');
  // }, []);

  // console.log('Render después del use effect');

  return (
    <AppUI
      loading={loading}
      error={error}
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

import React from 'react';
import { useLocalStorage } from '../TodoContext/customHooks';

const ToDoContext = React.createContext();

//React.createContext incuye 2 elementos:
//<ToDoContext.Provider></ToDoContext.Provider> => las propiedades que queremos exportar
//<ToDoContext.Consumer></ToDoContext.Consumer> => lo que nos permitirá consumirlas.


function ToDoProvider (props) {

    // Custom hook - localStorage
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
    } = useLocalStorage('TODOS_V1', []);

  // State
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

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

  const addToDo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
      completed: false,
      text,
    });
    saveToDos(newToDos);
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

  // useEffect

  // console.log('Render antes del use effect');

  // React.useEffect(() => {
  //   console.log('use effect');
  // }, []);

  // console.log('Render después del use effect');

    return(
        <ToDoContext.Provider value={{
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addToDo,
            completeToDo, 
            deleteToDo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext, ToDoProvider};

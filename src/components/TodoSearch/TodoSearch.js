import React from 'react';
import { ToDoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(ToDoContext);

    const onSearchValueChange = (event) => {console.log(event.target.value); setSearchValue(event.target.value)}

    return (
        <input
            value={searchValue}
            onChange={onSearchValueChange}
            className="TodoSearch" 
            placeholder='Buscar tarea'/>
    );
  }
  
  export {TodoSearch};
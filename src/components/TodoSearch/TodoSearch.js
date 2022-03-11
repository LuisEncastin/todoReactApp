import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    const onChangeValueInput = (event) => {console.log(event.target.value)}

    return (
        <input
        onChange={onChangeValueInput}
        className="TodoSearch" 
        placeholder='Buscar tarea'/>
    );
  }
  
  export {TodoSearch};
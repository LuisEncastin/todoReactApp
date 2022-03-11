import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {setSearchValue(event.target.value)}

    return (
        <input
            value={searchValue}
            onChange={onSearchValueChange}
            className="TodoSearch" 
            placeholder='Buscar tarea'/>
    );
  }
  
  export {TodoSearch};
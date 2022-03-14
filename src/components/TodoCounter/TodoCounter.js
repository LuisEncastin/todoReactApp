import React from 'react';
import { ToDoContext } from '../TodoContext/TodoContext';
import './TodoCounter.css';

function TodoCounter() {

    const { totalToDos, completedToDos } = React.useContext(ToDoContext);

    return (
        <h2 className="TodoCounter">Has completado { completedToDos } de { totalToDos } ToDo's</h2>
    );
  }
  
  export {TodoCounter};
import React from 'react';
import { ToDoContext } from '../TodoContext/TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {

  const { openModal, setOpenModal } = React.useContext(ToDoContext);

  const onClickButton = () => {
    setOpenModal(!openModal);
  };

  return (
    <button 
    className="CreateTodoButton"
    onClick={onClickButton}
    >
      +
    </button>
  );
  }
  
  export {CreateTodoButton};
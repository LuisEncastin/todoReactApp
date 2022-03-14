import React from 'react';
import { ToDoContext } from '../TodoContext/TodoContext';
import './TodoForm.css';

function TodoForm() {

    const [ newToDoValue, setNewToDoValue] = React.useState('');

    const { 
        addToDo,
        setOpenModal
     } = React.useContext(ToDoContext);
 
    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    };

 
    return(
        <form onSubmit={onSubmit}>
            <label>Write a new activity To Do</label>
            <textarea
                value={newToDoValue}
                onChange={onChange}
                placeholder='Create here a new activity reminder'
            />
            <div className='TodoForm-buttonContainer' >
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >Cancel
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                >Add "To Do"
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
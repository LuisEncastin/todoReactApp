import React from 'react';
import { ToDoContext } from '../TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosError } from '../TodosError/TodosError';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoForm } from '../TodoForm/TodoForm';
import { CreateTodoButton } from '..//CreateTodoButton/CreateTodoButton';
import { Modal } from '..//Modal/Modal';

function AppUI () {

    const {
        error,
        loading,
        searchedTodos,
        completeToDo,
        deleteToDo,
        openModal
    } = React.useContext(ToDoContext);

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
             {/* //Properties from the consumer comes from "value" of the provider
                Render props
                En este caso, eliminamos el React.consumer para usar React.useContext*/}
            <TodoList>
                {error &&   <TodosError error={error} />}
                {loading && <TodosLoading/>}
                {(!loading && !searchedTodos.length) && <EmptyTodos/>}

                {searchedTodos.map(toDo=>(
                    <TodoItem 
                        key={toDo.text} 
                        text={toDo.text} 
                        completed={toDo.completed}
                        onComplete={()=>completeToDo(toDo.text)}
                        onDelete={()=>deleteToDo(toDo.text)}
                    />
            ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}             

            <CreateTodoButton/>
        </React.Fragment>
    )}

export { AppUI };
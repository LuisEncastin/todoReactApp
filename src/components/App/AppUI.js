import React from 'react';
import { ToDoContext } from '../TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '..//CreateTodoButton/CreateTodoButton';

function AppUI () {

    const {
        error,
        loading,
        searchedTodos,
        completeToDo,
        deleteToDo
    } = React.useContext(ToDoContext);

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
             {/* //Properties from the consumer comes from "value" of the provider
                Render props
                En este caso, eliminamos el React.consumer para usar React.useContext*/}
            <TodoList>
                {error && <p>There was an error</p>}
                {loading && <p>Loading ... </p>}
                {(!loading && !searchedTodos.length) && <p>Create your first To Do.</p>}

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
            <CreateTodoButton/>
        </React.Fragment>
    )}

export { AppUI };
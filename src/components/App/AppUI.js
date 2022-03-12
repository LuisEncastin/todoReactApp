import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '..//CreateTodoButton/CreateTodoButton';

function AppUI ({
    loading,
    error,
    totalToDos,
    completedToDos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeToDo, 
    deleteToDo,
}) {
    return (
        <React.Fragment>
            <TodoCounter
                total ={totalToDos}
                completed = {completedToDos}/>
            <TodoSearch 
                searchValue = {searchValue}
                setSearchValue= {setSearchValue}/>     
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
        );
}


export { AppUI };
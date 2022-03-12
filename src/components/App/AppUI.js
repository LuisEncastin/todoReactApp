import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '..//CreateTodoButton/CreateTodoButton';

function AppUI ({
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
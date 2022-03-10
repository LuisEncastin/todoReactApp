import React from 'react';
import './TodoList.css';

import { TodoItem } from '../TodoItem/TodoItem';

let toDos = [
  {text: "Picar cebolla", completed: true },
  {text: "Picar tomate", completed: false },
  {text: "Picar cilantro", completed: false }
]

function TodoList() {
    return (
      <section>
        {toDos.map(todo=> <ul><TodoItem key={todo.text} text={todo.text} completed={todo.completed}/></ul>)}
      </section>
    );
  }
  
  export {TodoList};
import React from 'react';
import { ToDoProvider } from '../TodoContext/TodoContext';
import { AppUI } from './AppUI'

function App() {

  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  );
}

export default App;

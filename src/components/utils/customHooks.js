import React from 'react';

// itemName => El nombre de lo que buscará, o creará, y
// initialValue => El estado inicial de la variable(puede ser un objeto {}, un array [], un string vacío “”, etc)

function useLocalStorage(itemName, initialValue) {
    // localStorage
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem= JSON.parse(localStorageItem);
    }
  
    // Create and save Item
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    }
  
    // Definir el lugar donde se guardará la variable => item,
    // implementar una funcion que se encargue de actualizar el valor de la variable => saveItem.
    // RETORNAR la variable y la funcion en forma de array!
    return [
      item,
      saveItem,
    ]

    // itemName se convierte en Item, y save item es lo que nos ayuda a guardarlo
    // Custom hook - localStorage en ejecución
    //const [toDos, saveToDos] = useLocalStorage('TODOS_V1', []);
  }

export { useLocalStorage };
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal( { children } ) {
    //Comunicación entre componentes que están en distintos nodos.    
    //Recibo info de AppUI y lo envío al nuevo nodo
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            { children }   
        </div>,
        document.getElementById('modal')
    )
};

export { Modal };
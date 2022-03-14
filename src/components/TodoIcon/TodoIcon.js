import React from 'react';
import './TodoIcon.css';
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";

const iconTypes = {
    "check": color => (
        <BsFillCheckCircleFill className='Icon-svg Icon-svg--check' fill={color} />
    ),
    "delete": color => (
        <BsFillXCircleFill className='Icon-svg Icon-svg--delete' fill={color} />
    ),
}

function TodoIcon({ type, color='gray', onClick }) {
    return(
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >  
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };
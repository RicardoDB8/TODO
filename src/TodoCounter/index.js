import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

import dogImage from './dog_pixar_style.png';


function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  return (
    <div className="centered-container">
      <img src={dogImage} alt="Perro" className="img-resize"/>
      <h1 className='TodoCounter'>
        Haz completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TAREAS
      </h1>
    </div>
  );
  }

  export { TodoCounter }
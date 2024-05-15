import React, { useState } from 'react';
import BotonesTarea from './BotonesTarea'; 

const Tarea = ({ titulo, puntos, onCompletar, onFallar }) => {
  const [completada, setCompletada] = useState(false);
  const [fallada, setFallada] = useState(false);

  const handleCompletarClick = () => {
    setCompletada(true);
    onCompletar(puntos);
  };

  const handleFallaClick = () => {
    setFallada(true);
    onFallar(puntos);
  };

  return (
    <div className="tarea-diaria">
      <h3>{titulo}</h3>
      <p>Puntos por completar: {puntos}</p>
      <BotonesTarea
        completada={completada}
        fallada={fallada}
        onCompletar={handleCompletarClick}
        onFallar={handleFallaClick}
      />
    </div>
  );
};

export default Tarea;
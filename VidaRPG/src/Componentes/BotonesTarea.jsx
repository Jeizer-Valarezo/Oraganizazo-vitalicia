import React from 'react';

const BotonesTarea = ({ completada, fallada, onCompletar, onFallar }) => {
  // Deshabilitar botones según el estado de la tarea
  const disableCompletar = completada || fallada;
  const disableFallar = completada || fallada;

  return (
    <div className="botones-tarea">
      <button
        disabled={disableCompletar}
        onClick={onCompletar}
      >
        Completar
      </button>
      <button
        disabled={disableFallar}
        onClick={onFallar}
      >
        Fallar
      </button>
    </div>
  );
};

export default BotonesTarea;
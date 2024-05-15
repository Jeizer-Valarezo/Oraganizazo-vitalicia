import { useState, useEffect } from 'react';

const useTareas = (diaSemana) => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    if (diaSemana) {
      fetch(`/csv/${diaSemana.toLowerCase()}.csv`)
        .then(response => response.text())
        .then(text => {
          const tasks = text.split("\n").map(line => {
            const [nombre, puntos] = line.split(",");
            return { nombre, puntos: parseInt(puntos) };
          });
          setTareas(tasks);
        })
        .catch(error => console.error("Error al cargar las tareas:", error));
    }
  }, [diaSemana]);

  return tareas;
};

export default useTareas;
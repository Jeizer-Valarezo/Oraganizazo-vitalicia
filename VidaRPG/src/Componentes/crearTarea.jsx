import "../styles/seccion1.scss"
import Tarea from './Tarea'; 

const CrearTarea = ({ sumarPuntos, fallar, tareas }) => {
  return (
    <div className="seccion1Diseño">
      <h2 className='titulardo'>Tareas Creadas</h2>
      {tareas.map((tarea, index) => (
        <div key={index}>
          <Tarea titulo={tarea.nombre} puntos={tarea.puntos} onCompletar={sumarPuntos} onFallar={fallar} />
          
        </div>
      ))}
    </div>
  );
};

export default CrearTarea;
import "./App.css";
import CrearTarea from "./Componentes/crearTarea";
import Puntos from "./Componentes/puntos";
import Recompensas from "./Componentes/recompensas";
import useTareas from "./Componentes/hooks/useTareas";
import { useSelector, useDispatch } from 'react-redux';
import { sumarPuntos, fallar, comprarRecompensa } from './redux/actions/accionesPuntos';
import recompensas from "./Componentes/data/recompensasData";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const totalPuntos = useSelector(state => state.puntos.totalPuntos);
  const recompensaComprada = useSelector(state => state.puntos.recompensaComprada);
  const [diaSemana, setDiaSemana] = useState(""); 
  const tareas = useTareas(diaSemana);
  const [semanaOffset, setSemanaOffset] = useState(0);

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay() ;
    const personalidadesBase = ["Rezaxia", "Shiro", "Kuro", "Jeizer"];
    const personalidades = personalidadesBase.map((p, index) => {
      const newIndex = (index + semanaOffset) % personalidadesBase.length;
      return personalidadesBase[newIndex];
    });
    setDiaSemana(personalidades[dayOfWeek % personalidades.length]);
  
    if (dayOfWeek === 0) {
      setSemanaOffset((prevOffset) => {
        const newOffset = (prevOffset + 1) % personalidadesBase.length;
        return newOffset;
      });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('puntos', JSON.stringify(totalPuntos));
  }, [totalPuntos]);
  
  const handleSumarPuntos = (puntos) => {
    dispatch(sumarPuntos(puntos));
  };

  const handleFallar = (puntos) => {
    dispatch(fallar(puntos));
  };

  const handleComprarRecompensa = (precio) => {
    dispatch(comprarRecompensa(precio));
    alert("¡Recompensa comprada con éxito!");
  };

  return (
    <div>
      <Puntos totalPuntos={totalPuntos} />
      <header className="personalidad">
        <h1>Hoy es: {diaSemana}</h1>
      </header>
      <div className="container">
        <CrearTarea sumarPuntos={handleSumarPuntos} fallar={handleFallar} tareas={tareas} />
        <Recompensas
          puntos={totalPuntos}
          onComprar={handleComprarRecompensa}
          recompensas={recompensas}
          recompensaComprada={recompensaComprada}
        />
      </div>
    </div>
  );
}

export default App;

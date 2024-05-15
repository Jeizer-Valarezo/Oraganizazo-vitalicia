import "../styles/Puntos.scss"

const Puntos = ({ totalPuntos }) => {
  return (
    <div className="puntos">
      <p>Puntos: {parseInt(totalPuntos)}</p>
    </div>
  );
};

export default Puntos;

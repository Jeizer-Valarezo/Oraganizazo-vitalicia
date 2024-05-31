import "../styles/seccion1.scss"

const Recompensas = ({ puntos, recompensas, onComprar, recompensaComprada }) => {
  const handleComprarClick = (precio) => {
    if (puntos >= precio) {
      onComprar(precio);
    } else {
      alert('No tienes suficientes puntos para comprar esta recompensa.');
    }
  };

  return (
    <div className="seccion1Diseño">
      <h2 className='titulardo'>Recompensas</h2>
      {recompensas.map((recompensa, index) => (
        <div key={index}>
          <p>{recompensa.nombre}</p>
          <button className="RewardButton" onClick={() => handleComprarClick(recompensa.precio)} disabled={recompensa.comprada}>
            {recompensa.comprada ? 'Recompensa ya comprada' : `Comprar por ${recompensa.precio} puntos`}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Recompensas;
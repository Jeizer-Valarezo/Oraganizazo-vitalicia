const getPuntosFromLocalStorage = () => {
  const puntos = localStorage.getItem('puntos');
  if (puntos) {
    try {
      return JSON.parse(puntos);
    } catch (e) {
      console.error('Error parsing puntos from localStorage:', e);
      return 0; // Retorna un valor predeterminado si hay un error de parseo
    }
  }
  return 0; // Retorna un valor predeterminado si no hay nada en localStorage
};
const initialState = {
  totalPuntos: getPuntosFromLocalStorage(),
  recompensaComprada: false
};

const puntosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUMAR_PUNTOS':
      return {
        ...state,
        totalPuntos: state.totalPuntos + action.payload
      };
    case 'FALLAR':
      return {
        ...state,
        totalPuntos: state.totalPuntos - action.payload * 2
      };
    case 'COMPRAR_RECOMPENSA':
      return {
        ...state,
        totalPuntos: state.totalPuntos - action.payload,
        recompensaComprada: true
      };
    default:
      return state;
  }
};

export default puntosReducer;

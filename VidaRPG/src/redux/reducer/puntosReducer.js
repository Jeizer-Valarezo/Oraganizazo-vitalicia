const initialState = {
  totalPuntos: JSON.parse(localStorage.getItem('puntos')) || 0,
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

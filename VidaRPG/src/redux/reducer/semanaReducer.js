const initialState = {
    semanaOffset: 0,
    lastUpdated: null
  };
  
  function semanaReducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT_SEMANA_OFFSET':
        return {
          ...state,
          semanaOffset: (state.semanaOffset + 1) % 4, // Asumiendo que hay 4 personalidades
          lastUpdated: action.payload.date
        };
      default:
        return state;
    }
  }
  
  export default semanaReducer;
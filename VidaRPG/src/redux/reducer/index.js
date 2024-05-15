import { combineReducers } from 'redux';
import semanaReducer from './semanaReducer';
import puntosReducer from './puntosReducer';

const rootReducer = combineReducers({
  semana: semanaReducer,
  puntos: puntosReducer
});

export default rootReducer;
import { combineReducers } from 'redux-immutable';
import houseReducer from './houseReducer'

export default combineReducers({
  house: houseReducer
})
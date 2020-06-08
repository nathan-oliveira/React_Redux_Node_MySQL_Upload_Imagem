import { combineReducers } from 'redux';
import produtos from './produtos'

const rootReducer = combineReducers({
  produtos: produtos,
})


export default rootReducer
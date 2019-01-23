import { combineReducers } from 'redux'
import barbersReducer from './barbers'

const rootReducer = combineReducers({
  barberState: barbersReducer
})

export default rootReducer
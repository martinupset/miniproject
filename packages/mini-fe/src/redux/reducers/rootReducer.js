import {combineReducers} from 'redux'
import registerReducer from './registerReducer'
import signInReducer from './signInReducer'

const rootReducer = combineReducers({
  register: registerReducer,
  signIn: signInReducer
})

export default rootReducer

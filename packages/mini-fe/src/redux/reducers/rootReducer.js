import {combineReducers} from 'redux'
import registerReducer from './registerReducer'
import signInReducer from './signInReducer'
import dashboardReducer from './dashboardReducer'

const rootReducer = combineReducers({
  register: registerReducer,
  signIn: signInReducer,
  dashboard: dashboardReducer
})

export default rootReducer

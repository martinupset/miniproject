import {combineReducers} from 'redux'
import registerReducer from './registerReducer'
import signInReducer from './signInReducer'
import dashboardReducer from './dashboardReducer'
import shareReducer from './shareReducer'

const rootReducer = combineReducers({
  register: registerReducer,
  signIn: signInReducer,
  dashboard: dashboardReducer,
  shared: shareReducer
})

export default rootReducer

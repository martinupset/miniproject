import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import signInReducer from '../reducers/signInReducer'

const store = createStore(
  signInReducer,
  compose(applyMiddleware(...[thunk]), //需要使用的中间件数组
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )

export default store

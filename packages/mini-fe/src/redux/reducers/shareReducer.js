import {SET_AUTH, CLEAR_AUTH} from '../actions/actionTypes'
import { getCookie } from '../../pages/handlecookie'

const defaultState = {
  auth: {isAuthenticated: getCookie("token")}
}

const shareReducer = function(state = defaultState, action){
    if(action.type === SET_AUTH){
        return {...state, auth: {isAuthenticated: action.value}}
      }

    if(action.type === CLEAR_AUTH){
      return {...state, auth: {isAuthenticated: null}}
    }
    return state
}

export default shareReducer
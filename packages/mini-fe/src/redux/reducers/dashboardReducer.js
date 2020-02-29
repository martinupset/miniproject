import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM,SHOW_TODO} from '../actions/actionTypes'

const defaultState = {
  inputValue: 'Write Something',
  list:[]
}

const dashboardReducer = function(state = defaultState, action){

  if(action.type === SHOW_TODO){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list=action.payload.info
    return newState
  }

  if(action.type === CHANGE_INPUT){
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue=action.value
    return newState
  }

  if(action.type === ADD_ITEM){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push({"description":newState.inputValue})
    newState.inputValue = ''
    return newState
  }

  if(action.type === DELETE_ITEM){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}

export default dashboardReducer

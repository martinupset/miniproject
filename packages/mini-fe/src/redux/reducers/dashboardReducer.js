import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from '../actions/actionTypes'

const defaultState = {
  inputValue: 'Write Something',
  list:[
    'meeting',
    'coding',
    'eating'
  ]
}

const dashboardReducer = function(state = defaultState, action){
  if(action.type === CHANGE_INPUT){
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue=action.value
    return newState
  }

  if(action.type === ADD_ITEM){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
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

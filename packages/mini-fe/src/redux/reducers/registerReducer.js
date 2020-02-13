const registerReducer = function(state = {}, action){
  switch (action.type){
    case 'REGISTER':
      return{
        register: action.payload.info
      }

    default:
    return state
  }
}

export default registerReducer

const signInReducer = function(state = {}, action){
  switch (action.type){
    case 'SIGNIN':
      return{
        signIn: action.payload.info
      }

    default:
    return state
  }
}

export default signInReducer

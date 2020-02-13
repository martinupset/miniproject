const signInReducer = function(state = {signIn:[]}, action){
  switch (action.type){
    case 'VALIDATE':
      return{
       signIn: action.payload
      }

    default:
    return state
  }
}

export default signInReducer

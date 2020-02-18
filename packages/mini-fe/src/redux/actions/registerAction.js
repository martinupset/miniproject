import {fetchRegister} from '../network/register'

export const registerAction = (value) => async (dispatch) =>{
  const res = await fetchRegister(value)
  const result = await res.text()
  dispatch({
    type: 'REGISTER',
    payload: {
      info: result
    }
  })
}

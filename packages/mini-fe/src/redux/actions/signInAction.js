import {fetchSignIn} from '../network/signIn'

export const signInAction = (values) => async (dispatch) => {
  const res = await fetchSignIn (values)
  const result = await res.json()
  dispatch({
    type: 'SIGNIN',
    payload: {
      info: result
    }
  })
}

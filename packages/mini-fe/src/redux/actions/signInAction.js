import {fetchSignIn} from '../network/signIn'

export const signInAction = (values) => async (dispatch) => {
  const res = await fetchSignIn (values)
  dispatch({
    type: 'VALIDATE',
    payload: res
  })
}

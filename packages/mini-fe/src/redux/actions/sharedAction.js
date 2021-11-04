import { CLEAR_AUTH, SET_AUTH } from "./actionTypes";

export const setAuthAction = (value) => ({
    type: SET_AUTH,
    value
  })

export const clearAuthAction = () => ({
  type: CLEAR_AUTH
})
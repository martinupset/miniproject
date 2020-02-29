import {CHANGE_INPUT, SHOW_TODO} from './actionTypes'
import {fetchShowTodo,fetchAddItem,fetchDeleteItem} from '../network/todo'

export const showTodoAction = () => async (dispatch) =>{
  const res = await fetchShowTodo()
  const result = await res.json()
  dispatch({
    type: SHOW_TODO,
    payload: {
      info: result
    }
  })
}

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = (value) => async (dispatch) =>{
  await fetchAddItem(value)
  const res = await fetchShowTodo()
  const result = await res.json()
  dispatch({
    type: SHOW_TODO,
    payload: {
      info: result
    }
  })
  console.log(result)
}

export const deleteItemAction = (index,id) => async (dispatch) =>{
  await fetchDeleteItem(id)
  const res = await fetchShowTodo()
  const result = await res.json()
  dispatch({
    type: SHOW_TODO,
    payload: {
      info: result
    }
  })
}

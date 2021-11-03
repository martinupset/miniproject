import {CHANGE_INPUT, SHOW_TODO} from './actionTypes'
import {fetchShowTodo,fetchAddItem,fetchDeleteItem,fetchChangeItem} from '../network/todo'

export const showTodoAction = (userId) => async (dispatch) =>{
  const res = await fetchShowTodo(userId)
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
  const res = await fetchShowTodo(value.userId)
  const result = await res.json()
  dispatch({
    type: SHOW_TODO,
    payload: {
      info: result
    }
  })
  console.log(result)
}

export const deleteItemAction = (index,id,userId) => async (dispatch) =>{
  await fetchDeleteItem(id)
  const res = await fetchShowTodo(userId)
  const result = await res.json()
  dispatch({
    type: SHOW_TODO,
    payload: {
      info: result
    }
  })
}

export const changeItemAction = (content, userId) => async (dispatch) =>{
  await fetchChangeItem(content)
  const res = await fetchShowTodo(userId)
  const result = await res.json()
  dispatch({
    type: SHOW_TODO,
    payload: {
      info: result
    }
  })
}

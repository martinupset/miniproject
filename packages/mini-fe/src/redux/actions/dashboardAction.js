import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, SHOW_TODO} from './actionTypes'
import {fetchShowTodo,fetchAddItem,fetchDeleteItem} from '../network/todo'
import {objOfValueToArr} from '../changeObjToArr'

export const showTodoAction = () => async (dispatch) =>{
  const res = await fetchShowTodo()
  const result = await res.json()
  console.log(result)
  const arr = objOfValueToArr(result, 'description')
  console.log(arr)
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
  const res = await fetchAddItem(value)
  console.log(res)
  dispatch({
    type: ADD_ITEM,
    payload: {
      info: res
    }
  })
}

// export const deleteItemAction = (index) =>({
//   type: DELETE_ITEM,
//   index
// })

export const deleteItemAction = (index,id) => async (dispatch) =>{
  const res = await fetchDeleteItem(id)
  console.log(res)
  dispatch({
    type: DELETE_ITEM,
    payload: {
      index,
      info: res
    }
  })
}

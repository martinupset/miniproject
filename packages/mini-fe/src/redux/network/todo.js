export function fetchShowTodo(userId){
  return fetch(`http://localhost:3001/showTodo?userId=${userId}`, {
    method: 'GET',
    headers: {'Content-type': 'application/json'},
  })
}

export function fetchAddItem(value){
  return fetch('http://localhost:3001/addItem', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(value)
  })
}

export function fetchDeleteItem(id){
  return fetch('http://localhost:3001/deleteItem',{
    method: 'DELETE',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({"id":id})
  })
}

export function fetchChangeItem(content){
  return fetch('http://localhost:3001/changeItem',{
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(content)
  })
}

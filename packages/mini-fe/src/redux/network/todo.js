export function fetchShowTodo(){
  return fetch('http://localhost:3001/showTodo', {
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
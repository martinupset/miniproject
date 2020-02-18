export function fetchRegister(values){
  return fetch('http://localhost:3001/signUp', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(values)
  })
}

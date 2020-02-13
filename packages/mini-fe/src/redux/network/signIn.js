export function fetchSignIn(values){
  return fetch('http://localhost:3001/signIn', {
    credentials: 'same-origin',
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(values),
  })
}

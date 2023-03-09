export function getHeaders () {
  let token = ''
  if (sessionStorage.getItem('token')) {
    token = sessionStorage.getItem('token')
  }
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
}

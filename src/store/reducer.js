let loggedIn = false

if (sessionStorage.getItem('token')) {
  loggedIn = true
}

const intialState = {
  loggedIn: loggedIn,
  status: false
}

function reducer (state = intialState, action) {
  switch (action.type) {
    case 'loader-true':
      return { ...state, status: true }
    case 'loader-false':
      return { ...state, status: false }
    case 'login':
      return { ...state, loggedIn: true }
    case 'logout':
      return { ...state, loggedIn: false }
    default:
      return state
  }
}

export default reducer

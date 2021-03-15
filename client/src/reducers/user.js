import { SET_USER, LOGOUT } from '../constants'

const initialState = {
  token: null,
  currentUser: null
}

const user = (state = initialState, action) => {
  const { type, payload } = action

  switch(type) {
    case SET_USER:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        token: payload.token,
        currentUser: payload.user
      }

    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        currentUser: null
      }

    default:
      return state
  }
}

export default user
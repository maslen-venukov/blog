import { SET_STORIES } from '../constants'

const initialState = null

const stories = (state = initialState, action) => {
  const { type, payload } = action

  switch(type) {
    case SET_STORIES:
      return payload
  
    default:
      return state
  }
}

export default stories
import { SET_STORIES, ADD_STORY } from '../constants'

const initialState = null

const stories = (state = initialState, action) => {
  const { type, payload } = action

  switch(type) {
    case SET_STORIES:
      return payload

    case ADD_STORY:
      return state.length > 3
        ? [payload, ...state.slice(0, -1)]
        : [payload, ...state]

    default:
      return state
  }
}

export default stories
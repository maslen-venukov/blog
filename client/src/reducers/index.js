import { combineReducers } from 'redux'

import user from './user'
import stories from './stories'

const rootReducer = combineReducers({
  user,
  stories
})

export default rootReducer
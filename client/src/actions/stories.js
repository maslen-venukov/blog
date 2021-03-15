import axios from 'axios'

import { SET_STORIES } from '../constants'

const setStories = payload => ({
  type: SET_STORIES,
  payload
})

export const fetchStories = () => dispatch => {
  axios.get('/api/stories')
    .then(({ data }) => dispatch(setStories(data)))
    .catch(console.log)
}
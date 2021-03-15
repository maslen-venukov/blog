import axios from 'axios'

import { SET_STORIES, ADD_STORY } from '../constants'

const setStories = payload => ({
  type: SET_STORIES,
  payload
})

const addStory = payload => ({
  type: ADD_STORY,
  payload
})

export const fetchStories = () => dispatch => {
  axios.get('/api/stories')
    .then(({ data }) => dispatch(setStories(data)))
    .catch(console.log)
}

export const fetchAddStory = (formData, token) => dispatch => {
  axios.post('/api/stories', formData, {
    headers: { Authorization: token }
  })
    .then(({ data }) => dispatch(addStory(data)))
    .catch(console.log)
}
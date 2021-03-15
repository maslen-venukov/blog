import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Stories from '../components/Stories'

import { fetchAddStory } from '../actions/stories'

const Home = () => {
  const dispatch = useDispatch()

  const token = useSelector(({ user }) => user.token)

  const onAddStory = e => {
    const formData = new FormData(e.target)
    token && dispatch(fetchAddStory(formData, token))
  }

  return (
    <section className="home">
      <Stories onAdd={onAddStory} />
    </section>
  )
}

export default Home

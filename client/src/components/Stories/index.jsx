import React from 'react'
import { useSelector } from 'react-redux'

import Story from './Story'
import NewStory from './NewStory'

const Stories = () => {
  const stories = useSelector(({ stories }) => stories)
  const user = useSelector(({ user }) => user.currentUser)

  return (
    <div className="stories">
      {stories && (
        <ul className="stories__list">
          {stories.map(story => (
            <li key={story._id} className="stories__item">
              <Story {...story} />
            </li>
          ))}
        </ul>
      )}
      {user && <NewStory />}
    </div>
  )
}

export default Stories

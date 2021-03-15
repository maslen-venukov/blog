import React, { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

import Story from './Story'
import NewStory from './NewStory'
import StoriesModal from './StoriesModal'

const Stories = ({ onAdd }) => {
  const [activeStory, setActiveStory] = useState(null)

  const stories = useSelector(({ stories }) => stories)
  const user = useSelector(({ user }) => user.currentUser)

  const onCloseModal = () => setActiveStory(null)

  const handleOutsideClick = useCallback(e => {
    e.target.classList.contains('overlay') && onCloseModal()
  }, [])

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
    return () => document.body.removeEventListener('click', handleOutsideClick)
  }, [handleOutsideClick])

  return (
    <div className="stories">
      {stories && stories.length > 0 && (
        <ul className="stories__list">
          {stories.map(story => (
            <li key={story._id} className="stories__item">
              <Story setActiveStory={setActiveStory} {...story} />
            </li>
          ))}
        </ul>
      )}
      {user && user.role === 'OWNER' && <NewStory onAdd={onAdd} />}
      {activeStory && <StoriesModal {...activeStory} />}
    </div>
  )
}

export default Stories
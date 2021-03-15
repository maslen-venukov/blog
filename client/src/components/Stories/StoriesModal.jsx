import React from 'react'

const StoriesModal = ({ media, title }) => {
  return (
    <div className="stories__modal stories-modal overlay">
      <div className="stories-modal__body">
        <img src={media} alt={title} className="stories-modal__media" />
      </div>
    </div>
  )
}

export default StoriesModal
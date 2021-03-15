import React from 'react'

import createFilePath from '../../utils/createFilePath'

const Story = ({ setActiveStory, title, media, type, date }) => {
  const handleClick = () => setActiveStory({ media: createFilePath(media), title })

  return (
    <article onClick={handleClick} className="story">
      {type === 'image' && <img src={createFilePath(media)} alt={title} className="story__img" />}
      <h2 className="story__title">{title}</h2>
      <p className="story__date">{new Date(date).toLocaleDateString()}</p>
    </article>
  )
}

export default Story

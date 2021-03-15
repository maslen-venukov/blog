import React from 'react'

const Story = ({ img, title, date }) => {
  return (
    <article className="story">
      <img src={img} alt={title} className="story__img" />
      <h2 className="story__title">{title}</h2>
      <p className="story__date">{date}</p>
    </article>
  )
}

export default Story

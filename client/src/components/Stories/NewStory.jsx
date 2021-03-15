import React from 'react'

const NewStory = () => {
  return (
    <form className="stories__form">
      <input type="text" name="title" placeholder="Напишите что-нибудь" className="stories__input" />
      <input type="file" name="media" className="stories__file" />
      <button className="stories__add" aria-label="Добавить историю" />
    </form>
  )
}

export default NewStory

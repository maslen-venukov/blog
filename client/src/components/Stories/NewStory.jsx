import React from 'react'

const NewStory = ({ onAdd }) => {
  const handleSubmit = e => {
    e.preventDefault()
    onAdd(e)
  }

  return (
    <form onSubmit={handleSubmit} className="stories__form">
      <input type="text" name="title" placeholder="Напишите что-нибудь" className="stories__input" />
      <label className="stories__file">
        <input type="file" name="media" accept="image/*, video/*" />
      </label>
      <button className="stories__add" aria-label="Добавить историю" />
    </form>
  )
}

export default NewStory
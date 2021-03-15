import React from 'react'

import Social from './Social'

const Sidebar = () => {
  const socialLinks = [
    { href: 'https://www.instagram.com/', label: 'instagram' },
    { href: 'https://vk.com/', label: 'vk' },
    { href: 'https://www.pinterest.ru/', label: 'pinterest' }
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar__head">
        <div className="sidebar__img">
          <img src="http://placeimg.com/300/180/tech" alt="" />
        </div>

        <div className="sidebar__avatar">
          <img src="https://www.placecage.com/150/150" alt="" />
        </div>

        <h2 className="sidebar__name">Николас Кейдж</h2>
        <p className="sidebar__blog">блог front-end разработчика</p>

        <Social classes="sidebar__social" links={socialLinks} />
      </div>

      <p className="sidebar__info">Front-end разработчик. Практик верстки сайтов. Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.</p>

      <div className="sidebar__actions">
        <button className="sidebar__works">Мои работы</button>
        <button className="sidebar__contact">Написать мне</button>
      </div>
    </aside>
  )
}

export default Sidebar

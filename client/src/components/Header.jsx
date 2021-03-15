import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const user = useSelector(({ user }) => user.currentUser)

  return (
    <header className="header">
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">Главная</Link>
          </li>
          <li className="nav__item">
            <span className="nav__link nav__link--sublist">Статьи</span>
            <ul className="nav__sublist sublist">
              <li className="sublist__item">
                <Link to="/website-development" className="sublist__link">Создание сайтов</Link>
              </li>
              <li className="sublist__item">
                <Link to="/internet-marketing" className="sublist__link">Интернет-маркетинг</Link>
              </li>
              <li className="sublist__item">
                <Link to="/video-promotion" className="sublist__link">Продвижение видео</Link>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">Обо мне</Link>
          </li>
          <li className="nav__item">
            <Link to="/advertising" className="nav__link">Реклама</Link>
          </li>
          {user && (
            <li className="nav__item nav__item--profile">
              <Link to="/profile" className="nav__link">Профиль</Link>
            </li>
          )}
        </ul>
      </nav>

      <form className="header__search search">
        <input type="text" placeholder="Поиск по блогу" className="search__input" />
      </form>
    </header>
  )
}

export default Header
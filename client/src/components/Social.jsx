import React from 'react'

const Social = ({ classes, links }) => {
  return (
    <nav className={`${classes} social`}>
      <ul className="social__list">
        {links.map(link => (
          <li key={link.href} className="social__item">
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`social__link social__link--${link.label}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Social

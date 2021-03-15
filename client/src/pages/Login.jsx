import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { logIn } from '../actions/user'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const goHome = () => {
    history.push('/')
  }

  const onLogin = e => {
    e.preventDefault()
    const elements = Array.from(e.target.elements)
    const login = elements.find(el => el.name === 'login').value
    const password = elements.find(el => el.name === 'password').value
    dispatch(logIn(login, password, goHome))
  }

  return (
    <section className="login">
      <h2 className="login__title title">Вход</h2>
      <form onSubmit={onLogin} className="login__form">
        <input name="login" type="text" placeholder="Логин" className="login__input input" />
        <input name="password" type="password" placeholder="Пароль" className="login__input input" />
        <button className="login__btn btn">Войти</button>
      </form>
    </section>
  )
}

export default Login
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

import Sidebar from './components/Sidebar'
import Header from './components/Header'

import { auth } from './actions/user'
import { fetchStories } from './actions/stories'

const App = () => {
  const dispatch = useDispatch()

  const user = useSelector(({ user }) => user.currentUser)

  useEffect(() => {
    const token = localStorage.getItem('token')
    token && dispatch(auth(token))
    dispatch(fetchStories())
  }, [dispatch])

  return (
    <div className="wrapper">
      <Sidebar />
      <Header />
      <main className="main">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profile" render={() => user && user.role} />
          </Switch>
        </div>
      </main>
    </div>
  )
}

export default App
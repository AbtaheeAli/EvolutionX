import React from 'react'
import './custom.scss'
import { MainPage } from './components/MainPage'
import { Route, Switch } from 'react-router-dom'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Instructions } from './pages/Instructions'
import { isLoggedIn, logout } from './auth'

export function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/instructions">
          <Instructions />
        </Route>
        {isLoggedIn() && <MainPage />}
      </Switch>
    </main>
  )
}

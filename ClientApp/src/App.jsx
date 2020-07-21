import React from 'react'
import './custom.scss'
import { MainPage } from './components/MainPage'
import { Route, Switch } from 'react-router-dom'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
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
        <MainPage />
      </Switch>
    </main>
  )
}

import React from 'react'
import './custom.scss'
import { MainPage } from './components/MainPage'
import { Route, Switch } from 'react-router-dom'
import { Login } from './pages/Login'
export function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <MainPage />
      </Switch>
    </main>
  )
}

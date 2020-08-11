import React, { useState } from 'react'
import './custom.scss'
import { MainPage } from './components/MainPage'
import { Route, Switch } from 'react-router-dom'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Instructions } from './pages/Instructions'
import { isLoggedIn } from './auth'
import DemoMainPage from './pages/Demo/DemoMainPage'

export function App() {
  const [demo, setDemo] = useState(false)

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Login demo={demo} setDemo={setDemo} />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/instructions">
          <Instructions />
        </Route>
        {demo === false && isLoggedIn() && <MainPage />}
        {demo === true && <DemoMainPage demo={demo} setDemo={setDemo} />}
      </Switch>
    </main>
  )
}

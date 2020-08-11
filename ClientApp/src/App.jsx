import React, { useState } from 'react'
import './custom.scss'
import { MainPage } from './components/MainPage'
import { Route, Switch } from 'react-router-dom'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Instructions } from './pages/Instructions'
import { isLoggedIn } from './auth'

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
        <MainPage demo={demo} setDemo={setDemo} />
        {/* {isLoggedIn() && <MainPage />} */}
      </Switch>
    </main>
  )
}

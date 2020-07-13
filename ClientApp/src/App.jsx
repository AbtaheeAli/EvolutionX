import React from 'react'
import './custom.scss'
import { SideNav } from './components/SideNav'
import { Header } from './components/Header'
import { Route, Switch } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Gamercard } from './pages/Gamercard'

export function App() {
  return (
    <main>
      <SideNav />
      <Header />
      <body>
        <Switch>
          <Route exact path="/gamer-card">
            <Gamercard />
          </Route>
          <Route path="/friends"></Route>
          <Route path="/message-inbox"></Route>
          <Route path="/recent-achievements"></Route>
          <Route path="/xbox-one-games"></Route>
        </Switch>
        <Footer />
      </body>
    </main>
  )
}

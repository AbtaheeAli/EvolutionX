import React from 'react'
import './custom.scss'
import { SideNav } from './components/SideNav'
import { Header } from './components/Header'
import { Route, Switch } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Gamercard } from './pages/Gamercard'
import { Friends } from './pages/Friends'
import { RecentAchievements } from './pages/RecentAchievements'
import { Messages } from './pages/Messages'

export function App() {
  return (
    <main>
      <SideNav />
      <Header />
      <body>
        <Switch>
          <Route exact path="/">
            <Gamercard />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/message-inbox">
            <Messages />
          </Route>
          <Route path="/recent-achievements">
            <RecentAchievements />
          </Route>
          <Route path="/xbox-one-games"></Route>
        </Switch>
        <Footer />
      </body>
    </main>
  )
}

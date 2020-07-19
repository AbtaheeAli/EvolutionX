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
import { XboxOneGames } from './pages/XboxOneGames'
import { About } from './pages/About'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'

export function App() {
  return (
    <main>
      <SideNav />
      <Header />
      {/* <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
      </Switch> */}
      <body>
        <Switch>
          <Route exact path="/gamercard">
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
          <Route path="/xbox-one-games">
            <XboxOneGames />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </body>
      <Footer />
    </main>
  )
}

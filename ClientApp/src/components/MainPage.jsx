import React from 'react'
import { SideNav } from './SideNav'
import { Header } from './Header'
import { Route, Switch } from 'react-router-dom'
import { Footer } from './Footer'
import { Gamercard } from '../pages/Gamercard'
import { Friends } from '../pages/Friends'
import { RecentAchievements } from '../pages/RecentAchievements'
import { Messages } from '../pages/Messages'
import { XboxOneGames } from '../pages/XboxOneGames'
import { About } from '../pages/About'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
export function MainPage() {
  return (
    <div className="main">
      <SideNav />
      <Header />
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
        </Switch>
      </body>
      <Footer />
    </div>
  )
}

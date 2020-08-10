import React, { useState, useEffect } from 'react'
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
import { UserSettings } from '../pages/UserSettings'
import { UpdateAccount } from '../pages/UpdateAccount'
import { DemoGamercard } from '../pages/Demo/DemoGamerCard'
import { DemoFriends } from '../pages/Demo/DemoFriends'
import { DemoMessages } from '../pages/Demo/DemoMessages'
import { DemoRecentAchievements } from '../pages/Demo/DemoRecentAchievements'
import { DemoXboxOneGames } from '../pages/Demo/DemoXboxOneGames'
import { getUser } from '../auth'

export function MainPage() {
  const user = getUser()
  const [demo, setDemo] = useState(false)
  return (
    <div className="main">
      <SideNav />
      <Header />
      <body>
        <Switch>
          <Route exact path="/gamercard">
            {demo === false && <Gamercard />}
            {demo === true && <DemoGamercard />}
          </Route>
          <Route exact path="/friends">
            {demo === false && <Friends />}
            {demo === true && <DemoFriends />}
          </Route>
          <Route exact path="/message-inbox">
            {demo === false && <Messages />}
            {demo === true && <DemoMessages />}
          </Route>
          <Route exact path="/recent-achievements">
            {demo === false && <RecentAchievements />}
            {demo === true && <DemoRecentAchievements />}
          </Route>
          <Route exact path="/xbox-one-games">
            {demo === false && <XboxOneGames />}
            {demo === true && <DemoXboxOneGames />}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/settings">
            {demo === false && <UserSettings />}
          </Route>
          <Route exact path={`/settings/${user.id}/edit`}>
            {demo === false && <UpdateAccount />}
          </Route>
        </Switch>
      </body>
      <Footer />
    </div>
  )
}

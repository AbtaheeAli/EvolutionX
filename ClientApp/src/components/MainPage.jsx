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

export function MainPage(props) {
  const user = getUser()
  // const [demo, setDemo] = useState(true)
  return (
    <div className="main">
      <SideNav />
      <Header />
      <body>
        <Switch>
          <Route exact path="/gamercard">
            {props.demo === false && <Gamercard />}
            {props.demo === true && <DemoGamercard />}
          </Route>
          <Route exact path="/friends">
            {props.demo === false && <Friends />}
            {props.demo === true && <DemoFriends />}
          </Route>
          <Route exact path="/message-inbox">
            {props.demo === false && <Messages />}
            {props.demo === true && <DemoMessages />}
          </Route>
          <Route exact path="/recent-achievements">
            {props.demo === false && <RecentAchievements />}
            {props.demo === true && <DemoRecentAchievements />}
          </Route>
          <Route exact path="/xbox-one-games">
            {props.demo === false && <XboxOneGames />}
            {props.demo === true && <DemoXboxOneGames />}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/settings">
            {props.demo === false && <UserSettings />}
          </Route>
          {props.demo === false && (
            <Route exact path={`/settings/${user.id}/edit`}>
              <UpdateAccount />
            </Route>
          )}
        </Switch>
      </body>
      <Footer />
    </div>
  )
}

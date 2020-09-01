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
import { ViewAccounts } from '../pages/ViewAccounts'
import { getUser } from '../auth'

export function MainPage() {
  const user = getUser()

  return (
    <div className="main">
      <SideNav />
      <Header />
      <body>
        <Switch>
          <Route exact path="/gamercard">
            <Gamercard />
          </Route>
          <Route exact path="/friends">
            <Friends />
          </Route>
          <Route exact path="/message-inbox">
            <Messages />
          </Route>
          <Route exact path="/recent-achievements">
            <RecentAchievements />
          </Route>
          <Route exact path="/xbox-one-games">
            <XboxOneGames />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/settings">
            <UserSettings />
          </Route>
          <Route exact path={`/settings/${user.id}/edit`}>
            <UpdateAccount />
          </Route>
          <Route exact path={`/view-accounts`}>
            <ViewAccounts />
          </Route>
          <Route exact path={`/add-account`}></Route>
        </Switch>
      </body>
      <Footer />
    </div>
  )
}

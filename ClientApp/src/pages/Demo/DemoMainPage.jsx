import React, { useState, useEffect } from 'react'
import { SideNav } from '../../components/SideNav'
import { Header } from '../../components/Header'
import { Route, Switch } from 'react-router-dom'
import { Footer } from '../../components/Footer'

import { About } from '../../pages/About'

import { DemoGamercard } from './DemoGamerCard'
import { DemoFriends } from './DemoFriends'
import { DemoMessages } from './DemoMessages'
import { DemoRecentAchievements } from './DemoRecentAchievements'
import { DemoXboxOneGames } from './DemoXboxOneGames'

export default function DemoMainPage() {
  return (
    <div className="main">
      <SideNav />
      <Header />
      <body>
        <Switch>
          <Route exact path="/gamercard">
            <DemoGamercard />
          </Route>
          <Route exact path="/friends">
            <DemoFriends />
          </Route>
          <Route exact path="/message-inbox">
            <DemoMessages />
          </Route>
          <Route exact path="/recent-achievements">
            <DemoRecentAchievements />
          </Route>
          <Route exact path="/xbox-one-games">
            <DemoXboxOneGames />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </body>
      <Footer />
    </div>
  )
}

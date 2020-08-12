import React, { useState, useEffect } from 'react'
import { DemoSideNav } from './DemoSideNav'
import { Header } from '../../components/Header'
import { Route, Switch } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { About } from '../../pages/About'
import { DemoGamercard } from './DemoGamerCard'
import { DemoFriends } from './DemoFriends'
import { DemoMessages } from './DemoMessages'
import { DemoRecentAchievements } from './DemoRecentAchievements'
import { DemoXboxOneGames } from './DemoXboxOneGames'

export default function DemoMainPage(props) {
  // const [demo, setDemo] = useState()
  // setDemo(props.demo)
  // console.log(demo)

  return (
    <div className="main">
      <DemoSideNav />
      <Header />
      <body>
        <Switch>
          <Route exact path="/demo-gamercard">
            <DemoGamercard />
          </Route>
          <Route exact path="/demo-friends">
            <DemoFriends />
          </Route>
          <Route exact path="/demo-message-inbox">
            <DemoMessages />
          </Route>
          <Route exact path="/demo-recent-achievements">
            <DemoRecentAchievements />
          </Route>
          <Route exact path="/demo-xbox-one-games">
            <DemoXboxOneGames />
          </Route>
          <Route exact path="/demo-about">
            <About />
          </Route>
        </Switch>
      </body>
      <Footer />
    </div>
  )
}

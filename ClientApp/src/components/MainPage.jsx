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
import { AddAccount } from '../pages/AddAccount'
import { ViewAccounts } from '../pages/ViewAccounts'
import { getUser, getFirstAccount } from '../auth'

export function MainPage() {
  const user = getUser()

  const defaultAccount = getFirstAccount()

  const [chosenAccount, setChosenAccount] = useState(defaultAccount)

  const handleAccountChange = switchedAccount => {
    setChosenAccount(switchedAccount)
  }
  console.log(chosenAccount)

  return (
    <div className="main">
      <SideNav
        chosenAccount={chosenAccount}
        setChosenAccount={setChosenAccount}
        handleAccountChange={handleAccountChange}
      />
      <Header />
      <body>
        <Switch>
          <Route exact path="/gamercard">
            <Gamercard chosenAccount={chosenAccount} />
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
          <Route exact path={`/add-account`}>
            <AddAccount />
          </Route>
          <Route exact path={`/view-accounts`}>
            <ViewAccounts />
          </Route>
        </Switch>
      </body>
      <Footer />
    </div>
  )
}

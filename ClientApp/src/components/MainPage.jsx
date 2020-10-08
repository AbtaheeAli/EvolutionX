import React, { useState, useEffect } from 'react'
import { SideNav } from './SideNav'
import { Header } from './Header'
import { Route, Switch } from 'react-router-dom'
import { Footer } from './Footer'
import { Gamercard } from '../pages/XboxAccountInfoPages/Gamercard'
import { Friends } from '../pages/XboxAccountInfoPages/Friends'
import { RecentAchievements } from '../pages/XboxAccountInfoPages/RecentAchievements'
import { Messages } from '../pages/XboxAccountInfoPages/Messages'
import { XboxOneGames } from '../pages/XboxAccountInfoPages/XboxOneGames'
import { About } from '../pages/About'
import { UserSettings } from '../pages/Settings/UserSettings'
import { UpdateUser } from '../pages/Settings/UpdateUser'
import { AddAccount } from '../pages/Settings/AddAccount'
import { ViewAccounts } from '../pages/Settings/ViewAccounts'
import { getUser, getFirstAccount } from '../auth'
import { UpdateAccount } from '../pages/Settings/UpdateAccount'

export function MainPage() {
  const user = getUser()

  const defaultAccount = getFirstAccount()

  const [chosenAccount, setChosenAccount] = useState(defaultAccount)

  const handleAccountChange = switchedAccount => {
    setChosenAccount(switchedAccount)
  }

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
            <Friends chosenAccount={chosenAccount} />
          </Route>
          <Route exact path="/message-inbox">
            <Messages chosenAccount={chosenAccount} />
          </Route>
          <Route exact path="/recent-achievements">
            <RecentAchievements chosenAccount={chosenAccount} />
          </Route>
          <Route exact path="/xbox-one-games">
            <XboxOneGames chosenAccount={chosenAccount} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/settings">
            <UserSettings />
          </Route>
          <Route exact path={`/settings/user/edit/${user.id}/`}>
            <UpdateUser />
          </Route>
          <Route exact path={`/accounts`}>
            <ViewAccounts />
          </Route>
          <Route exact path={`/add-account`}>
            <AddAccount />
          </Route>
          <Route exact path={`/settings/user/account/edit/:accountId/`}>
            <UpdateAccount />
          </Route>
        </Switch>
      </body>
      <Footer />
    </div>
  )
}

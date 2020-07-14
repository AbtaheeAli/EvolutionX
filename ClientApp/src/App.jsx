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
          <Route path="/xbox-one-games">
            <XboxOneGames />
          </Route>
          <Route path="/about">
            <section className="about-box">
              <article>
                <a href="#">
                  <img
                    className="Game"
                    src="https://i7.pngguru.com/preview/79/769/243/xbox-360-microsoft-studios-fable-legends-xbox-one-xbox-fitness-avatar-thumbnail.jpg"
                    width="200rem"
                    height="200rem"
                    alt="GHLogo"
                  />
                </a>
                <p>
                  Evolution X is an application that uses an third-party API,
                  XAPI, to access the users Xbox Live Account. Once the users
                  are signed in, they are able to view their gamer card, Xbox
                  Live friends, messages, recent achievement, and their Xbox One
                  Games.
                </p>
                <small>We are not affiliated with Microsoft or XAPI.</small>
              </article>
            </section>
          </Route>
        </Switch>
        <Footer />
      </body>
    </main>
  )
}

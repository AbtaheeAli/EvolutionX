import React from 'react'
import './custom.scss'
import { SideNav } from './components/SideNav'
import { Header } from './components/Header'
import { Route, Switch } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Gamercard } from './pages/Gamercard'

export function App() {
  return (
    <main>
      <SideNav />
      <Header />
      <body>
        <Switch>
          <Route exact path="/gamer-card">
            <Gamercard />
          </Route>
          <Route path="/friends">
            <section className="friend-card">
              <article className="friend-card-img">
                <a href="#">
                  <img
                    className="friendAvatar"
                    src="https://i.pcmag.com/imagery/articles/03q56RTgHk4cQvs07pQt4I9-1.fit_scale.size_2698x1517.v1569490700.jpg"
                    width="120rem"
                    height="120rem"
                    alt="GHLogo"
                  />
                </a>
              </article>
              <article className="friend-card-text">
                <div>
                  <h4 className="friendList">Gamertag: UNPROFESSI0NAL</h4>
                  <h4 className="friendList">Rep: Good</h4>
                  <h4 className="friendList">Gamerscore: 1230</h4>
                  <h4 className="friendList">TenureLevel: 2</h4>
                </div>
              </article>
            </section>
            <section className="friend-card">
              <article className="friend-card-img">
                <a href="#">
                  <img
                    className="friendAvatar"
                    src="https://i.pcmag.com/imagery/articles/03q56RTgHk4cQvs07pQt4I9-1.fit_scale.size_2698x1517.v1569490700.jpg"
                    width="120rem"
                    height="120rem"
                    alt="GHLogo"
                  />
                </a>
              </article>
              <article className="friend-card-text">
                <div>
                  <h4 className="friendList"> Gamertag: bob101</h4>
                  <h4 className="friendList">Reputation: Good</h4>
                  <h4 className="friendList">Gamerscore: 1230</h4>
                  <h4 className="friendList">TenureLevel: 2</h4>
                </div>
              </article>
            </section>
          </Route>
          <Route path="/message-inbox"></Route>
          <Route path="/recent-achievements"></Route>
          <Route path="/xbox-one-games"></Route>
        </Switch>
        <Footer />
      </body>
    </main>
  )
}

import React from 'react'
import './custom.scss'
import { SideNav } from './components/SideNav'
import { Header } from './components/Header'

export function App() {
  return (
    <main>
      <SideNav />
      <Header />
      <body>
        <section className="gamer-card">
          <article>
            <a href="#">
              <img
                src="https://i.pcmag.com/imagery/articles/03q56RTgHk4cQvs07pQt4I9-1.fit_scale.size_2698x1517.v1569490700.jpg"
                width="80rem"
                height="80rem"
                alt="GHLogo"
              />
            </a>
          </article>
          <article>
            <div className="gamer-card-text">
              <h3 className="gamer-card-text-first-item">Cody Banks</h3>
              <h3>G 46994</h3>
            </div>
            <h2>UNPROFESSI0NAL</h2>
            <div className="gamer-card-text">
              <div className="gamer-card-ff">
                <h4 className="gamer-card-text-first-item">Friends</h4>
                <h4 className="gamer-card-text-first-item"># 136</h4>
              </div>
              <div className="gamer-card-ff">
                <h4>Followers</h4>
                <h4>#</h4>
              </div>
            </div>
            <h4>Bio: Yo yo yo</h4>
            <h4>Location: Florida</h4>
          </article>
        </section>
      </body>
      <footer>
        <p>
          © 2020 Evolution X - Created and owned by Cody Banks & Abtahee Ali
        </p>
        <p>
          xapi.us is an unofficial API & Evolution X it is in no way endorsed or
          affiliated to the Microsoft Corporation, Xbox, Xbox LIVE and any Xbox
          images are registered trademarks of their respected owners.
        </p>
      </footer>
    </main>
  )
}

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
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width="80rem"
                height="80rem"
                alt="GHLogo"
              />
            </a>
          </article>
          <article>
            <div className="gamer-card-text">
              <h3 className="gamer-card-text-first-item">Name</h3>
              <h3>Gamerscore</h3>
            </div>
            <h2>GamerTag</h2>
            <div className="gamer-card-text">
              <div className="gamer-card-ff">
                <h4 className="gamer-card-text-first-item">Friends</h4>
                <p className="gamer-card-text-first-item">#</p>
              </div>
              <div className="gamer-card-ff">
                <h4>Followers</h4>
                <p>#</p>
              </div>
            </div>
            <h4>Bio</h4>
            <h4>Location</h4>
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

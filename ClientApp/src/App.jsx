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
              <h3>Name</h3>
              <h3>Gamerscore</h3>
            </div>
            <h2>GamerTag</h2>
            <div className="gamer-card-text">
              <h4>Followers</h4>
              <h4>Friends</h4>
            </div>
            <div className="gamer-card-text">
              <p>#</p>
              <p>#</p>
            </div>
            <h4>Bio</h4>
            <h4>Location</h4>
          </article>
        </section>
      </body>
    </main>
  )
}

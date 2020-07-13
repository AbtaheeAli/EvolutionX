import React from 'react'
import './custom.scss'

export function App() {
  return (
    <main>
      <div class="sidenav">
        <ul>
          <li>
            <a href="#">Gamer Card</a>{' '}
          </li>
          <li>
            <a href="#">Friends</a>
          </li>
          <li>
            <a href="#">Message Inbox</a>
          </li>
          <li>
            <a href="#">Recent Achievements</a>
          </li>
          <li>
            <a href="#"> Xbox One Games</a>
          </li>
        </ul>
      </div>
      <header>
        <nav className="left-header">
          <ul>
            {/* <li className="logo">
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="80rem"
                  height="80rem"
                  alt="GHLogo"
                />
              </a>
            </li> */}
            <li className="title">
              <h2>Evolution X</h2>
            </li>
            <li>
              <small className="subtitle">Transform the Game</small>
            </li>
          </ul>
        </nav>
        <nav className="right-header">
          <ul>
            <li>
              <button type="button" className="app btn btn-dark">
                About the Application
              </button>
            </li>
            <li>
              <button type="button" className="logout btn btn-dark">
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <body>
        <p>yooooo</p>
      </body>
    </main>
  )
}

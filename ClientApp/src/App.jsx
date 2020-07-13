import React from 'react'
import './custom.scss'

export function App() {
  return (
    <main>
      <div class="sidenav">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
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

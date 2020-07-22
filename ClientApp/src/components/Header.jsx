import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <nav className="left-header">
        <Link className="title" to="/gamercard">
          <h2 className="header-title">Evolution X</h2>
        </Link>
        <small className="subtitle">Transform the Game</small>
      </nav>
      <nav className="right-header">
        <ul>
          <li>
            <Link to="/about">
              <button type="button" className="app btn ">
                About the Application
              </button>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <button type="button" className="app btn">
                Settings
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

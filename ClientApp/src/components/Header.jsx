import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <nav className="left-header">
        <h2>Evolution X</h2>
        <small className="subtitle">Transform the Game</small>
      </nav>
      <nav className="right-header">
        <ul>
          <li>
            <Link to="/">
              <button type="button" className="app btn btn-dark">
                About the Application
              </button>
            </Link>
          </li>
          <li>
            <button type="button" className="logout btn btn-dark">
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

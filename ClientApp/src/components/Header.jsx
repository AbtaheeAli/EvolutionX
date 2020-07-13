import React from 'react'

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
  )
}

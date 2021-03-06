import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/Login Image.png'

export function DemoSideNav() {
  const handleLogout = () => {
    window.location = '/'
  }

  return (
    <div className="sidenav">
      <ul>
        <li className="navLogo">
          <img src={logo} width="130rem" height="90rem" alt="GHLogo" />
        </li>
        <li>
          <Link className="navLink" to="/demo-gamercard">
            Gamer Card
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/demo-friends">
            Friends
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/demo-message-inbox">
            Message Inbox
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/demo-recent-achievements">
            Recent Achievements
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/demo-xbox-one-games">
            Xbox One Games
          </Link>
        </li>
      </ul>
      <ul className="logout-button">
        <li className="about-button">
          <Link to="/about">
            <button type="button" className="about btn ">
              About the Application
            </button>
          </Link>
        </li>
        <li className="logout">
          <button type="button" className="logout btn" onClick={handleLogout}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  )
}

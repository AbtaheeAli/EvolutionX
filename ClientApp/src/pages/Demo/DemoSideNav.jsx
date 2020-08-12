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
          <Link className="navLink" to="/gamercard">
            Gamer Card
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/friends">
            Friends
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/message-inbox">
            Message Inbox
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/recent-achievements">
            Recent Achievements
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/xbox-one-games">
            Xbox One Games
          </Link>
        </li>
      </ul>
      <ul className="logout-button">
        <li className="setting-button">
          <Link to="/settings">
            <button type="button" className="setting  btn">
              User Settings
            </button>
          </Link>
        </li>
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

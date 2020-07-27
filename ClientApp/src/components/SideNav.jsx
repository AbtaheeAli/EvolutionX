import React from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn, logout } from '../auth'
import logo from '../images/Login Image.png'

export function SideNav() {
  {
    const handleLogout = () => {
      logout()
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
          <li className="about-button">
            <Link to="/about">
              <button type="button" className="about btn ">
                About the Application
              </button>
            </Link>
          </li>
          <li className="logout">
            {isLoggedIn() && (
              <Link>
                <button
                  type="button"
                  className="logout btn"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    )
  }
}

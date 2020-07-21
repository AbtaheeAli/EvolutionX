import React from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn, logout } from '../auth'

export function SideNav() {
  {
    const handleLogout = () => {
      logout()
      window.location = '/'
    }

    return (
      <div className="sidenav">
        <ul>
          <li className="logo">
            <article className="navLogo">
              <img
                src="https://lh3.googleusercontent.com/xu-mhdu9qDSlyTzNsNBCrKXss4LRfyB95ElQymkF3jSF1UJ3I6mbvoey6_QADDtmUeDHiReUurfIGqYG-r0qlhZrSgyhvsgnKpeyYgrNgVDlR88NYcYLL_S7YCFdmVCVFsTZDY2AOo0=w1920-h1080"
                width="130rem"
                height="80rem"
                alt="GHLogo"
              />
            </article>
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
        <ul>
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

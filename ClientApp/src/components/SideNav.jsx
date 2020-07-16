import React from 'react'
import { Link } from 'react-router-dom'

export function SideNav() {
  return (
    <div class="sidenav">
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
          <Link className="navLink" to="/">
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
    </div>
  )
}

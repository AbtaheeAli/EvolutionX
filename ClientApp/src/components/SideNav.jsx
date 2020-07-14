import React from 'react'
import { Link } from 'react-router-dom'

export function SideNav() {
  return (
    <div class="sidenav">
      <ul>
        <li className="logo">
          <Link className="navLink" to="/">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              width="80rem"
              height="80rem"
              alt="GHLogo"
            />
          </Link>
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

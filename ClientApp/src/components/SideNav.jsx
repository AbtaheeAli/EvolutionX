import React from 'react'
import { Link } from 'react-router-dom'

export function SideNav() {
  return (
    <div class="sidenav">
      <ul>
        <li className="logo">
          <article className="navLogo">
            <img
              src="https://lh3.googleusercontent.com/XURI0lS_tprI-7v9KqvLS8RvRHfxlEzWvwlARHUAGML6NW6Jn4DBXsABsoPGQMTc_GbCw5XXuGMTzPgevN7cNsZPdMVvykV6BxWZYo8oaDxgP-QC4KI7_m2LEdkknBBgSBhJ3ae3crA=w600-h315-p-k"
              width="140rem"
              height="90rem"
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

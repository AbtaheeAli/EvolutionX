import React from 'react'

export function SideNav() {
  return (
    <div class="sidenav">
      <ul>
        <li className="logo">
          <a href="#">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              width="80rem"
              height="80rem"
              alt="GHLogo"
            />
          </a>
        </li>
        <li>
          <a href="#">Gamer Card</a>{' '}
        </li>
        <li>
          <a href="#">Friends</a>
        </li>
        <li>
          <a href="#">Message Inbox</a>
        </li>
        <li>
          <a href="#">Recent Achievements</a>
        </li>
        <li>
          <a href="#"> Xbox One Games</a>
        </li>
      </ul>
    </div>
  )
}

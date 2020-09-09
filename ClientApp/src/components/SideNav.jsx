import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn, logout, getAccounts } from '../auth'
import logo from '../images/Login Image.png'

function UserAccount(props) {
  const [chosenAccount, setChosenAccount] = useState()

  console.log(chosenAccount)

  const handleAccountChange = props => {
    setChosenAccount(props)
  }

  return (
    <li className="dropdown">
      <button className="dropbtn">Accounts</button>
      <div className="dropdown-content">
        <button type="button" onClick={handleAccountChange.bind(this, props)}>
          {props.AccountName}
        </button>
      </div>
    </li>
  )
}

export function SideNav() {
  const handleLogout = () => {
    logout()
    window.location = '/'
  }

  const accounts = getAccounts()

  return (
    <div className="sidenav">
      <ul>
        <li className="navLogo">
          <img src={logo} width="130rem" height="90rem" alt="GHLogo" />
        </li>
        {accounts.map(account => (
          <UserAccount
            key={account.Id}
            AccountName={account.accountName}
            ApiKey={account.apiKey}
            XboxProfileUserId={account.xboxProfileUserId}
          />
        ))}
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
          {isLoggedIn() && (
            <button type="button" className="logout btn" onClick={handleLogout}>
              Log Out
            </button>
          )}
        </li>
      </ul>
    </div>
  )
}

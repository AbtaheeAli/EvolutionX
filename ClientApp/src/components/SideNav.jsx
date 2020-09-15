import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn, logout, getAccounts, getFirstAccount } from '../auth'
import logo from '../images/Login Image.png'

export function UserAccount(props) {
  const handleAccountChange = event => {
    props.handleAccountChange(event)
  }

  return (
    <button type="button" onClick={() => handleAccountChange(props)}>
      {props.accountName}
    </button>
  )
}

export function SideNav(props) {
  const defaultAccount = getFirstAccount()

  const [chosenAccount, setChosenAccount] = useState(defaultAccount)

  const accounts = getAccounts()

  const handleLogout = () => {
    logout()
    window.location = '/'
  }

  const handleAccountChange = switchedAccount => {
    setChosenAccount(switchedAccount)
    props.handleAccountChange(switchedAccount)
  }

  // useEffect(() => {
  //   function loadChosenAccount() {
  //     setChosenAccount(props.chosenAccount)
  //   }
  //   loadChosenAccount()
  //   handleAccountChange()
  // }, [chosenAccount])

  // console.log(chosenAccount)

  return (
    <div className="sidenav">
      <ul>
        <li className="navLogo">
          <img src={logo} width="130rem" height="90rem" alt="GHLogo" />
        </li>
        <li className="dropdown">
          <button className="dropbtn">Accounts</button>
          <div className="dropdown-content">
            {accounts.map(account => (
              <UserAccount
                key={account.Id}
                accountName={account.accountName}
                apiKey={account.apiKey}
                xboxProfileUserId={account.xboxProfileUserId}
                handleAccountChange={handleAccountChange}
              />
            ))}
          </div>
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

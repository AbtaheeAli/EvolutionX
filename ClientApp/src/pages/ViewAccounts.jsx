import React, { useState, useEffect } from 'react'
import { getUser, getAccounts } from '../auth'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../images/Login Image.png'

export function UserAccount(props) {
  const [showApiKey, setShowApiKey] = useState(false)

  const [showXboxId, setShowXboxId] = useState(false)

  const [showEmail, setShowEmail] = useState(false)

  const [xboxAccount, setXboxAccount] = useState()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    function loadAccountInfo() {
      const url = `https://xapi.us/v2/${props.xboxProfileUserId}/new-profile`

      fetch(url, {
        method: 'GET',
        headers: {
          'X-AUTH': props.apiKey,
        },
      })
        .then(response => response.json())
        .then(account => {
          setXboxAccount(account)
          setLoading(true)
        })
    }

    loadAccountInfo()
  }, [props.apiKey, props.xboxProfileUserId])

  return (
    <div className="account-settings-card viewAccount">
      {loading === false && (
        <div className="spinner mt-5 pt-5 d-flex justify-content-center align-items-center">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="account-settings-card-header">
        <h3>{props.accountName}</h3>

        <div className="account-settings-dropdown">
          <img
            className="account-settings-dropbtn"
            src="https://img.icons8.com/ios-filled/24/000000/settings.png"
          />
          <div className="account-settings-dropdown-content">
            <button type="account-settings-button">Update</button>
            <button type="account-settings-button">Delete</button>
          </div>
        </div>
      </div>
      <ul className="settings-list">
        <li>
          <button
            className="btn settings-button"
            onClick={() => setShowEmail(!showEmail)}
          >
            Email
          </button>
          {showEmail && <div>{props.accountEmail}</div>}
        </li>
        <li>
          <button
            className="btn settings-button"
            onClick={() => setShowApiKey(!showApiKey)}
          >
            API Key
          </button>
          {showApiKey && <div>{props.apiKey}</div>}
        </li>
        <li>
          <button
            className="btn settings-button"
            onClick={() => setShowXboxId(!showXboxId)}
          >
            Xbox ID
          </button>
          {showXboxId && <div>{props.xboxProfileUserId}</div>}
        </li>
      </ul>

      {loading === true && (
        <div>
          <div className="gamer-card-img-container">
            <img
              className="gamer-card-img"
              src={xboxAccount.displayPicRaw}
              width="280rem"
              height="280rem"
              alt="profile"
            />
          </div>
          <h2 className="gamer-card-gamertag">{xboxAccount.gamertag}</h2>
          <div className="gamer-card-text gamer-info">
            <h3 className="user-settings-username accountUsername">
              {xboxAccount.realName}
            </h3>
            <h3>
              {' '}
              <img
                alt="gamerscore"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACF0lEQVRIic3Xu2sUURTH8U9MYjaIEDWYh88YxSKCiCBYWfgofIB/gHZiYeEfoYX4CEGEdCKipai9KBGMiNhIRBsfINF0KYxLEkFjcWeWybrZuRN30R+cYu7Mud87Z8459w7/SC0Fnu3EIRxAHzYm45P4iqd4jNlGLW4Qd1DGQo59x20M/A2whBHMRwCrbR7D6CgK7RZCVxRYbc/RGwvtxacGQFP7iJ48aClZZaOgqY3LCftIE6CpXVsKOmB5iVQk4QZTWGsGfAN76oUjURk3k+fvYwKbsSbHrxVdeJgd7BRqMG/V77AF63AaZ7Eb7RiN8J8R8qiiExFOc9iJfZiuuncpeaOXEfMcy4KvRjjcFVrsqxr3fuGkkEB581yBtgS8Qb4eYRf21rjXggcRc1RYKbgvwuEztleNlfEjc92G1Tnz9MOKCGA9ncPajB2J8FnIgqciHDYJ7S+rUSHRpnFK3KYwlQV/iXA4LNTs+8zYKqF+u/BayPo8TWYvjosrpx3Yb3E5/cTF5CVeRMxzNAuObSBvhJCnDeQMhoQavh7hX2kgaahnhfaXpyG8xYXk+ptQvxM4H+F/T4jcIm1NBpu5SWxbakXDTQRfrheKdow1AfpMRKn1CPXaKOgHrM+Dpupu0JuPizhvVatD2G2Wk3BzwjddWRSa1YBwSI+p8xncEg4LdVXkF6aEg8IvTL8/f2HG8ESNOv2v9BvNTaDnqkETWAAAAABJRU5ErkJggg=="
              />{' '}
              {xboxAccount.gamerScore}
            </h3>
          </div>
        </div>
      )}
    </div>
  )
}

export function ViewAccounts() {
  const user = getUser()

  const [errorMessage, setErrorMessage] = useState()

  const [accounts, setAccounts] = useState()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/Accounts/UserId/${user.id}`)
      const apiData = await response.json()
      setAccounts(apiData)
      setLoading(true)
    }

    fetchUser()
  }, [user.id])
  console.log(user)

  return (
    <section className="user-page">
      <h3>{user.userName}'s Accounts</h3>
      <button
        className="btn settings-button"
        // onClick={() => setShowEmail(!showEmail)}
      >
        Add Account
      </button>
      {loading === false && (
        <div className="spinner mt-5 pt-5 d-flex justify-content-center align-items-center">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {loading === true && (
        <section className="user-container">
          {accounts.map(account => (
            <UserAccount
              key={account.id}
              accountName={account.accountName}
              accountEmail={account.accountEmail}
              apiKey={account.apiKey}
              xboxProfileUserId={account.xboxProfileUserId}
            />
          ))}
        </section>
      )}
    </section>
  )
}

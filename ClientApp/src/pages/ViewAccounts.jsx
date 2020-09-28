import React, { useState, useEffect } from 'react'
import { getUser, getAccounts } from '../auth'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../images/Login Image.png'

export function UserAccount(props) {
  const [showApiKey, setShowApiKey] = useState(false)

  const [showXboxId, setShowXboxId] = useState(false)

  const [showEmail, setShowEmail] = useState(false)

  return (
    <div className="account-settings-card viewAccount">
      <ul className="settings-list">
        <li>
          <h3 className="user-settings-username">{props.accountName}</h3>
        </li>

        <li>
          <button
            className="btn settings-button"
            onClick={() => setShowEmail(!showEmail)}
          >
            Email
          </button>
          {showEmail && <div>{props.accountEmail}</div>}
        </li>
        <li className="key">
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
    </div>
  )
}

export function ViewAccounts() {
  const user = getUser()

  const [errorMessage, setErrorMessage] = useState()

  const [accounts, setAccounts] = useState()
  console.log(accounts)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // function loadAccountInfo() {
    //   const url = `https://xapi.us/v2/${user.xboxProfileUserId}/new-profile`

    //   fetch(url, {
    //     method: 'GET',
    //     headers: {
    //       'X-AUTH': user.apiKey,
    //     },
    //   })
    //     .then(response => response.json())
    //     .then(account => {
    //       setXboxAccount(account)
    //       setLoading(true)
    //     })
    // }

    const fetchUser = async () => {
      const response = await fetch(`/api/Accounts/UserId/${user.id}`)
      const apiData = await response.json()
      setAccounts(apiData)
      setLoading(true)
    }

    // loadAccountInfo()
    fetchUser()
  }, [user.id])

  return (
    <section className="user-page">
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

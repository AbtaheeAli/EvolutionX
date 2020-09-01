import React, { useState, useEffect } from 'react'
import { getUser, authHeader } from '../auth'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export function UserSettings() {
  const user = getUser()

  const [xboxAccount, setXboxAccount] = useState({})

  const history = useHistory()

  const [userDetails, setUserDetails] = useState({})

  const [loading, setLoading] = useState(false)

  const [showApiKey, setShowApiKey] = useState(false)

  const [showXboxId, setShowXboxId] = useState(false)

  const [showEmail, setShowEmail] = useState(false)

  // useEffect(() => {
  //   function loadAccountInfo() {
  //     const url = `https://xapi.us/v2/${user.xboxProfileUserId}/new-profile`

  //     fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'X-AUTH': user.apiKey,
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(account => {
  //         setXboxAccount(account)
  //         setLoading(true)
  //       })
  //   }

  //   const fetchUser = async () => {
  //     const response = await fetch(`/api/Users/${user.id}`)
  //     const apiData = await response.json()

  //     setUserDetails(apiData)
  //   }

  //   loadAccountInfo()
  //   fetchUser()
  // }, [user.apiKey, user.xboxProfileUserId, user.id])

  const handleDelete = event => {
    event.preventDefault()

    fetch(`/api/Users/${user.id}`, {
      method: 'DELETE',
      headers: { ...authHeader() },
    }).then(response => {
      if (response.status === 204) {
        history.push('/')
      }
    })
  }

  return (
    <section className="user-page">
      {/* {loading === false && (
        <div className="spinner mt-5 pt-5 d-flex justify-content-center align-items-center">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )} */}
      {/* {loading === true && ( */}
      <section className="user-container">
        <div className="account-settings-card">
          <ul className="settings-list">
            <li>
              <img
                className="gamer-card-img"
                src={xboxAccount.displayPicRaw}
                width="180rem"
                height="180rem"
                alt="UserXboxLogo"
              />
              <h3 className="user-settings-username">{userDetails.userName}</h3>
            </li>
            <li>
              <button
                className="btn settings-button"
                onClick={() => setShowEmail(!showEmail)}
              />
              <Link className="btn settings-button" to={`/add-account`}>
                Add an Account
              </Link>
              <Link className="btn settings-button" to={`/view-accounts`}>
                View Accounts
              </Link>
              <button className="btn settings-button" onClick={handleDelete}>
                Delete Account
              </button>
            </li>
            <li className="key">
              <button
                className="btn settings-button"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                API Key
              </button>
              {showApiKey && <div>{userDetails.apiKey}</div>}
            </li>
            <li>
              <button
                className="btn settings-button"
                onClick={() => setShowXboxId(!showXboxId)}
              >
                Xbox ID
              </button>
              {showXboxId && <div>{userDetails.xboxProfileUserId}</div>}
            </li>
          </ul>
          <div className="buttons">
            <Link
              className="btn settings-button"
              to={`/settings/${user.id}/edit`}
            >
              Update Account
            </Link>
            {/* <button className="btn settings-button" onClick={handleDelete}>
                Delete Account
              </button> */}
          </div>
        </div>
      </section>
      {/* )} */}
    </section>
  )
}

import React, { useState, useEffect } from 'react'
import { getUser } from '../auth'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../images/Login Image.png'

export function ViewAccounts() {
  const user = getUser()

  const [errorMessage, setErrorMessage] = useState()

  const history = useHistory()

  const [xboxAccount, setXboxAccount] = useState({})

  const [showApiKey, setShowApiKey] = useState(false)

  const [showXboxId, setShowXboxId] = useState(false)

  const [userDetails, setUserDetails] = useState({})
  const [showEmail, setShowEmail] = useState(false)
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
      const response = await fetch(`/api/Users/${user.id}`)
      const apiData = await response.json()
      setLoading(true)

      setUserDetails(apiData)
    }

    // loadAccountInfo()
    fetchUser()
  }, [user.apiKey, user.xboxProfileUserId, user.id])

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
          <div className="account-settings-card">
            <ul className="settings-list">
              <li>
                <img
                  className="gamer-card-img"
                  src=""
                  width="180rem"
                  height="180rem"
                  alt="UserXboxLogo"
                />
                <h3 className="user-settings-username">
                  {userDetails.userName}
                </h3>
              </li>
              <li>
                <div>{userDetails.email}</div>
              </li>
              <li>
                <button
                  className="btn settings-button"
                  onClick={() => setShowEmail(!showEmail)}
                >
                  Email
                </button>
                {showEmail && <div>{userDetails.email}</div>}
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
          </div>
        </section>
      )}
    </section>
  )
}

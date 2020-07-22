import React, { useState, useEffect } from 'react'
import { getUser } from '../auth'
import { useHistory } from 'react-router'

export function UserSettings() {
  const user = getUser()

  const history = useHistory()

  const [account, setAccount] = useState({})

  const [accountDetails, setAccountDetails] = useState({})

  function loadAccountInfo() {
    const url = `https://xapi.us/v2/${user.xboxProfileUserId}/new-profile`

    fetch(url, {
      method: 'GET',
      headers: {
        'X-AUTH': user.apiKey,
      },
    })
      .then(response => response.json())
      .then(account => {
        setAccount(account)
        setAccountDetails(account.detail)
      })
  }

  useEffect(() => {
    loadAccountInfo()
  }, [])

  const handleDelete = event => {
    event.preventDefault()

    fetch(`/api/Users/{id}/${id}`, {
      method: 'DELETE',
      // headers: { ...authHeader() },
    }).then(response => {
      if (response.status === 204) {
        history.push('/')
      }
    })
  }

  return (
    <section className="user-container">
      <div className="account-settings-card">
        <div className="user-account-img-name">
          <img
            className="gamer-card-img"
            src={account.displayPicRaw}
            width="180rem"
            height="180rem"
            alt="UserLogo"
          />
          <h3>{user.userName}</h3>
        </div>
        <ul>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
          <li>
            <strong> X API Key:</strong> {user.apiKey}
          </li>
          <li>
            <strong>Xbox Profile User ID: </strong>
            {user.xboxProfileUserId}
          </li>
        </ul>
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </section>
  )
}

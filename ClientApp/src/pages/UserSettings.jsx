import React, { useState, useEffect } from 'react'
import { getUser, authHeader } from '../auth'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export function UserSettings() {
  const user = getUser()

  const [account, setAccount] = useState({})

  const history = useHistory()

  const [userDetails, setUserDetails] = useState({})

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
      })
  }

  const fetchUser = async () => {
    const response = await fetch(`/api/Users/${user.id}`)
    const apiData = await response.json()

    setUserDetails(apiData)
  }

  useEffect(() => {
    loadAccountInfo()
  }, [])

  useEffect(() => {
    fetchUser()
  }, [])

  console.log(userDetails)

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
    <section className="user-container">
      <div className="account-settings-card">
        <div className="user-account-img-name">
          <img
            className="gamer-card-img"
            src={account.displayPicRaw}
            width="180rem"
            height="180rem"
            alt="UserXboxLogo"
          />
          <h3>{userDetails.userName}</h3>
        </div>
        <ul>
          <li>
            <strong>Email:</strong> {userDetails.email}
          </li>
          <li>
            <strong> X API Key:</strong> {userDetails.apiKey}
          </li>
          <li>
            <strong>Xbox Profile User ID: </strong>
            {userDetails.xboxProfileUserId}
          </li>
        </ul>
        <div className="buttons">
          <Link className="btn update" to={`/settings/${user.id}/edit`}>
            Update Account
          </Link>
          <button className="btn delete" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
      </div>
    </section>
  )
}

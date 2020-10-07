import React, { useState, useEffect } from 'react'
import { getUser, authHeader, getAccounts } from '../auth'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export function UserSettings() {
  const user = getUser()

  const accounts = getAccounts()

  const history = useHistory()

  const [userDetails, setUserDetails] = useState({})

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/Users/${user.id}`)
      const apiData = await response.json()
      setLoading(true)

      setUserDetails(apiData)
    }

    fetchUser()
  }, [user.id])

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
                <div>{accounts.length} Accounts linked to Profile</div>
              </li>
              <li>
                <div className="buttons">
                  <Link className="btn settings-button" to={`/accounts`}>
                    View Accounts
                  </Link>
                </div>
              </li>
            </ul>
            <div className="buttons">
              <Link
                className="btn settings-button"
                to={`/settings/user/edit/${user.id}`}
              >
                Update Profile
              </Link>
              <button className="btn settings-button" onClick={handleDelete}>
                Delete Profile
              </button>
            </div>
          </div>
        </section>
      )}
    </section>
  )
}

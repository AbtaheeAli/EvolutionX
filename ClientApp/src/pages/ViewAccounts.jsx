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

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await fetch(`/api/Users/${user.id}`)
  //     const apiData = await response.json()

  //     setUpdatingUser(apiData)
  //   }
  //   fetchUser()
  // }, [user.id])

  // const handleFormSubmit = event => {
  //   event.preventDefault()

  //   fetch(`/api/Users/${user.id}`, {
  //     method: 'PUT',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify(updatingUser),
  //   })
  //     .then(response => response.json())
  //     .then(apiResponse => {
  //       if (apiResponse.status === 400) {
  //         setErrorMessage(Object.values(apiResponse.errors).join(' '))
  //       } else {
  //         history.push('/settings')
  //       }
  //     })
  // }

  return (
    <div className="update-container signup-card-container">
      <section className="update-card signup-card">
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
        <div className="card-body">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
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
      </section>
    </div>
  )
}

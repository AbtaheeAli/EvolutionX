import React, { useState } from 'react'
import { useHistory } from 'react-router'

export function SignUp() {
  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState()

  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    userName: '',
    apiKey: '',
    xboxProfileUserId: '',
  })

  const handleFieldChange = event => {
    const value = event.target.value
    const fieldName = event.target.id

    const updatedUser = { ...newUser, [fieldName]: value }

    setNewUser(updatedUser)
  }

  const handleFormSubmit = event => {
    event.preventDefault()

    fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(apiResponse => {
        if (apiResponse.status === 400) {
          setErrorMessage(Object.values(apiResponse.errors).join(' '))
        } else {
          history.push('/')
        }
      })
  }

  return (
    <div className="card">
      <div className="card-header">Create an Account</div>
      <div className="card-body">
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              value={newUser.userName}
              onChange={handleFieldChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={newUser.email}
              onChange={handleFieldChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={newUser.password}
              onChange={handleFieldChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="apiKey">API Key</label>
            <input
              type="text"
              className="form-control"
              id="apiKey"
              value={newUser.apiKey}
              onChange={handleFieldChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Xbox Profile User Id</label>
            <input
              type="text"
              className="form-control"
              id="xboxUserProfileId"
              value={newUser.xboxProfileUserId}
              onChange={handleFieldChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { recordAuthentication } from '../auth'
import { Link } from 'react-router-dom'
import logo from '../images/Login Image.png'

export function Login(props) {
  const [errorMessage, setErrorMessage] = useState()

  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  })

  const handleFieldChange = event => {
    const value = event.target.value
    const fieldName = event.target.id

    const updatedUser = { ...loginUser, [fieldName]: value }

    setLoginUser(updatedUser)
  }

  const handleFormSubmit = event => {
    event.preventDefault()

    fetch('/api/Sessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(loginUser),
    })
      .then(response => response.json())
      .then(apiResponse => {
        if (apiResponse.status === 400) {
          setErrorMessage(Object.values(apiResponse.errors).join(' '))
        } else {
          recordAuthentication(apiResponse)
          window.location = '/gamercard'
        }
      })
  }

  // const [demo, setDemo] = useState(false)

  return (
    <div className="login-card-container">
      <section className="card">
        <div className="login-img">
          <img src={logo} alt="EXLogo" />
        </div>
        <div className="login-title">
          <h2>Evolution X</h2>
        </div>
        <div className="card-body">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <form className="login-form" onSubmit={handleFormSubmit}>
            <div className="login-form-group">
              <img
                alt="email"
                src="data:image/png;base64,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"
              />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={loginUser.email}
                onChange={handleFieldChange}
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="password"></label>
              <img
                alt="password"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB8UlEQVRIidWUz2vTcBjGnydmSbrlm7QXL6t/gE4QxcMcO0zxIg7UgycVT/YieNe/xAkevQviL9yUgc1JEBR/7CKIQzyUrku6bq3d9/VglZombVK2g88pvL8+z/uGBNhncVTBE8AueV5FRK4AONprei/kAz8M780AnbEBQaEwTdN8LMCxxAKRt1rrxflW63vaDGOY877hnwS4qG3b07btAbgEYA3kccMwHn0ArGFGE1X1vFuBUhIo9fFNqeTH86+KxWKg1OdAKQlc92buDfj75hDg9smNjc14/nSj0aDIHQAgeTU3AMARABDbfplqwrKWeyZmxgG4ADBfq0VpBbP1eth7VKkm4oGq552nyBKA6SHwJK2TrJwKw6f9wYENKHJ3jOEAUNbAUjyYdKJyQmwNIgtWFFl+FNnQ+iyALwnmDmUBDEjIa3PN5mrX9xcarjs7t7W1IiI3svSOBoi0jN1dP1BqUWv9jORzAbjZbFazAMyRFeSkkC/6gKsEpDo1dXhvAP/qnXacy68dR3Fn536Whkzv4I9E6+s/a7Vto91+CPLEXgO2tWl+dZQ6B+BM1qY8Jyoc0LouORqAfBv86IocJHBhvwDdyYmJjpDtPICkE60j+Wsud7rdWkoPAEDIb/HY4L+IrPQgWQ39HU6gkpb/f/ULNY+pKBeKFisAAAAASUVORK5CYII="
              ></img>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={loginUser.password}
                onChange={handleFieldChange}
              />
            </div>
            <button type="submit" className="btn login-btn">
              Login
            </button>
          </form>
          <div className="login-or-signup">
            - OR -
            <Link className="signup-link" to="/signup">
              <a className="login-page-signup" href="/foobar">
                Sign Up!
              </a>
            </Link>
            <Link className="signup-link" to="/demo-gamercard">
              <a className="login-page-signup" href="/foobar">
                Demo Our Application
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

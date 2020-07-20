import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { recordAuthentication } from '../auth'

export function Login() {
  const history = useHistory()

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

  return (
    <div className="login-card-container">
      <section className="card">
        <div className="login-img">
          <img
            src="https://lh3.googleusercontent.com/xu-mhdu9qDSlyTzNsNBCrKXss4LRfyB95ElQymkF3jSF1UJ3I6mbvoey6_QADDtmUeDHiReUurfIGqYG-r0qlhZrSgyhvsgnKpeyYgrNgVDlR88NYcYLL_S7YCFdmVCVFsTZDY2AOo0=w1920-h1080"
            width="130rem"
            height="80rem"
            alt="GHLogo"
          />
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
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAEDUlEQVRIie2UW2ibZRjH/+/7fflybI5NTdOmqSNN6trZlmbF2vXgqDCE3ii0WtAr7axsU1FBxsALwSud4EB06kSHWyfoBBEUtLKuo1NMj5s9pG5p2mrtMVn6JfnOXjghLc2sXu93+fDn//B/n+d9gLv8C2QXGlrjD7U6VbXLAs0JADzI2grD9E3Epi4DUP93g2ZfqLdUEQ+3CHywQhKMCcoAAOyqghmdPjOoN0/Psex7V+LR9/9Tg6qqKs57SzjbzSc6REKUH/Xm8WWGGxYoxgDAoKLWrYh1B7N8DQONnDfbv94osj0ZiUSkOz/GbR72BS58ZXMoz3jKok3lwa58ukZ/ZXePpyx60eZQ2n2Bvp00zPZCsy/U+xS/cbTfYIkPsuZHhuPTAw0lgcZam+OdBov9uaDV2elwuE3E5r1ZqEnPTnHcKZHQ/YeyqfC6u3Q1nlyL5Pqx2/ypTxF6REKUXw2GE5OxyWi7L/Bis8C/ul/IFM2yHO9VZHOK0rZ3Lc7nn95c33vebPdO6E2vhcXMaZ8s9QL4EDmDp7nuNf5Qa7OQDvXrzeNXYjMX6sqq9jYImVesqkrftLlPvW11N71lKzwS0RkXXk/+WaUQQtIgV4fmps71G8xjLQIf3Fde2Zw3gVNVuyokwfiFyToMAPeowvFWgS8+aS080x+PHgOAm8AY/MHfq+XsJynCmP5gmAEAWGG4kQpp40G3onQBuLRjAgs0R5Iy4CkzCgAuTSm5wXLCDYY7nasbmpu5OMoZ51cpTfMMXQAAnmI0SSlMqurc8ubbh7wdkez8VQhAblFGYhRs/l2g8u2t1/I22ATZsKkKTKpWBwBrhFm0qYp+jyIeztU94K98tFbMlFo11aRp1AEABbLcVKAqSDN0KVe7ZU0LnEWpPbLUtUoprqUSZwwO16RFw2MeRb7f6PSUwuVZrLS6OsMCfyIsZoozhLJrLOuy2wuT9WL22DrDyD9z3NHl5PpqTtIt0G5veaQty1d8XODqGZqbOnewJPBCWM4e98qSe50ymRopa0xQmv7U7BwIydnqe2XRa1I1oVQRuQ8KXF9+Oz/bmTcBAM3qcKNezBySgLBcVPzd1fjMN4LDc2lZxzl5ShMjnPH6oNFy8nJ85iXq9kZShPEusbqlH/Tmz78PlB5BLHbH4wcAaPcF+i7aHEqPpyza6K/szitsa2Mf8gXeaPPlPyc7rkh9fb3OsZw8+wSf6FBAtH6DeXyF4YYzBGMSIWmLppRxilbjUeWqjkyq8iOLMz4Bd/XCwlBmVw3+4UBZsMcnS70tAh8MSllTgrKQCWBRVbAAfuKMqyN60/UYYV8emZ/+ZdcJtkH3+e474Ib8uBmak9U0nQCS5oHoIjF8Njt/7bddeNwlP38BLNeeTOQM62wAAAAASUVORK5CYII=" />{' '}
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
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB8UlEQVRIidWUz2vTcBjGnydmSbrlm7QXL6t/gE4QxcMcO0zxIg7UgycVT/YieNe/xAkevQviL9yUgc1JEBR/7CKIQzyUrku6bq3d9/VglZombVK2g88pvL8+z/uGBNhncVTBE8AueV5FRK4AONprei/kAz8M780AnbEBQaEwTdN8LMCxxAKRt1rrxflW63vaDGOY877hnwS4qG3b07btAbgEYA3kccMwHn0ArGFGE1X1vFuBUhIo9fFNqeTH86+KxWKg1OdAKQlc92buDfj75hDg9smNjc14/nSj0aDIHQAgeTU3AMARABDbfplqwrKWeyZmxgG4ADBfq0VpBbP1eth7VKkm4oGq552nyBKA6SHwJK2TrJwKw6f9wYENKHJ3jOEAUNbAUjyYdKJyQmwNIgtWFFl+FNnQ+iyALwnmDmUBDEjIa3PN5mrX9xcarjs7t7W1IiI3svSOBoi0jN1dP1BqUWv9jORzAbjZbFazAMyRFeSkkC/6gKsEpDo1dXhvAP/qnXacy68dR3Fn536Whkzv4I9E6+s/a7Vto91+CPLEXgO2tWl+dZQ6B+BM1qY8Jyoc0LouORqAfBv86IocJHBhvwDdyYmJjpDtPICkE60j+Wsud7rdWkoPAEDIb/HY4L+IrPQgWQ39HU6gkpb/f/ULNY+pKBeKFisAAAAASUVORK5CYII="></img>
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
        </div>
      </section>
    </div>
  )
}

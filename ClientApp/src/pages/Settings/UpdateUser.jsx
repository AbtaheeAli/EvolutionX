import React, { useState, useEffect } from 'react'
import { getUser } from '../../auth'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../../images/Login Image.png'

export function UpdateUser() {
  const user = getUser()

  const [errorMessage, setErrorMessage] = useState()

  const [updatingUser, setUpdatingUser] = useState({
    email: '',
    userName: '',
  })

  const history = useHistory()

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/Users/${user.id}`)
      const apiData = await response.json()

      setUpdatingUser(apiData)
    }
    fetchUser()
  }, [user.id])

  const handleFieldChange = event => {
    const value = event.target.value
    const fieldName = event.target.id

    const updatedUser = { ...updatingUser, [fieldName]: value }

    setUpdatingUser(updatedUser)
  }

  const handleFormSubmit = event => {
    event.preventDefault()

    fetch(`/api/Users/${user.id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatingUser),
    })
      .then(response => response.json())
      .then(apiResponse => {
        if (apiResponse.status === 400) {
          setErrorMessage(Object.values(apiResponse.errors).join(' '))
        } else {
          history.push('/settings')
        }
      })
  }

  return (
    <div className="update-container signup-card-container">
      <section className="update-card signup-card">
        <div className="update-img signup-img">
          <img src={logo} alt="EXLogo" />
        </div>
        <div className="update-title signup-title">
          <h2>Evolution X</h2>
        </div>
        <div className="card-body">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <form className=" signup-form" onSubmit={handleFormSubmit}>
            <div className=" update-form-group signup-form-group">
              <img
                alt="userName"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABuUlEQVRIie2Vv2sUURDHP9+3IYW8NakMiY3YWKQNRE5Ri8DZWMTaUgv/gutFEJI+2NlYSwqxsBCFyDWCpAiHFtpdGbx7iz8uccdCN+ye7t3uemW+1Zt5M/N5b3i7A6dqKOWNA5gfeN8BruBc1Khimv402FtMkq1VGGXuuXzMwPsO0gMAzBpxkBC0v3gPSfIwc7tCkHPXmlX/B8+563m7cCPMivbf+gy8/LNuAxdKI8dqTSuc1zNCuNOCbwDvVlbOjEJ4CmxWSXbTQwD4jnQvgwCs9ftfke4CP2YHMuu1hsPDcXdrODxE6s0OJJ2bcIil2YHgfNf72+PObhzfAparFKj8GEx60vV+6ShNdwEi5zYNHlXNr/Pqzpq0MxdFOzVyTlS1df+tKjcyoAvsmtknpL5AZrYs6SK/v6PLjP0364JeRXB/PYSPE2K29+L4koPHwI2yoPLWmb2fD+HmFAgAV0P4sBBCW7BfG2TOvViDo2mQTKswSqXnZfulrROsv43jTlVQllMNJB2fzCGzDcFGHVBhhknH+a1C6yxN39QqPEFK09d5u3CjxSTZGngvZjDKF5Jku/EpT5XXL/0ug2gFVetXAAAAAElFTkSuQmCC"
              />

              <input
                type="text"
                className="form-control"
                id="userName"
                value={updatingUser.userName}
                placeholder="User Name"
                onChange={handleFieldChange}
              />
            </div>

            <div className=" update-form-group signup-form-group">
              <img
                alt="email"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAADoklEQVQ4jY2UXYiUZRTHf+d5J2133ufdyUxTg0izD00RTMvRIiEk14ssQSq6sKK7LjJKJMUbISjrrpuuIjAiRdE+tgxDsJ3XD3aFwLAbBTNFdP2Yefcjd2eefxfODLOTa/6vDuf8z//5n/PwPMYEOFQoFCbVai+Z2WqkBcB0IAauGlwM0mFzrmdZpXLAQO391p7ogckF7zcCm4B7BAMGJZldMOkfYIpgjsFSYBJw0sw2LatUfppQuM/7qaOwF3gG6QTOffh3pXJwPdTaDfw+fXp+aGhoA2abgVmCHcUs2/wf94cKhULq/anUe6XefyRwE62pFce8vzdNkoP1vh3jigKXev9D6r2OxPGWOxFsRQodqfd9qfcqxfE6qK8iTZLXkL4WfFfMsrWt4xxJktUhhI1mtrjO/95Vq1tCLrcPaX9xcHA7QOr9Y8BJ4GxXlj3udkGEtA2o4tx7raKlON4qqcfMliL9LKlH0B1yuT3AYpnFDW4xy/40s93A7HKSrMzNTJIlSI9itnt5uXy61amk7cCpUKs9v2J4+AJAb2fnTIuiP+rjXm5dSQhhv5m9YiF0OxfCKgCTfhy3d+ljIJhzrzdEAerxfgDMLrX2RM711/MPOzNbCFCDow3C0Xx+IbAAOLysXD7RflkGF2/lOBdFlwAE05xgKoAza5Jqzj1VJxxvF63n7wOotfQAhNHRjno45pA8wI1KZbjpSLr/5kR27lbCwAwAnBu3ipDLzaqH5x3OXQW4q7NzyvhpwUKotivugkiwBODujo6BccIhLKqHx5xJFwFyUTS7qWp2FiDAvHbhB+L4ZYMCAFnW2VZ+E6hSrX7jJPUCBGllozpWq/0CjJnZht+6upoHHuvqekjOfYbZFwBj0rONWpok7wJFpM+LIyPnrVQoPGi12hng9I0sm7cSqgBHkmS7pK3AFWCfgROsQ/oyRNFOF8JxYADYCTwCrDE4pCxbU4QRt/z69bNI3wJzJ3n/RsPB05XKNuADmQ0DbwlWIX16Y3Dw/RXlcp+kd4AxYCPwBNK2JMteKMJIczFHk2Ru6n2WxvFQKZ9fRBt2QdSea2CiX7D5H6ferwX2ANcJYX1xaOjXicTuBM3Tilm2z6RXgck4dyD1/qveOJ5/u+beOJ5f8v7t2zpuJUdmnwi6AWR2zqR+g8syG0WaIZhmMIebD6W/mGVP/q9wA6V8fpEze1FmzyHNpv705dwVC2HAzM7IrDdE0d4V16791d7/LwjCgQLAekmAAAAAAElFTkSuQmCC"
              />{' '}
              <input
                type="email"
                className="form-control"
                id="email"
                value={updatingUser.email}
                placeholder="Email"
                onChange={handleFieldChange}
              />
            </div>
            <div className="signup-btn-container">
              <button type="submit" className="btn signup-btn">
                Update
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

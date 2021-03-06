import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Link, useParams } from 'react-router-dom'
import logo from '../../images/Login Image.png'

export function UpdateAccount() {
  const [errorMessage, setErrorMessage] = useState()

  const [updatingAccount, setUpdatingAccount] = useState({
    accountName: '',
    accountEmail: '',
    apiKey: '',
    xboxProfileUserId: '',
  })

  console.log(updatingAccount)

  const history = useHistory()

  const { accountId } = useParams()

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await fetch(`/api/Accounts/${accountId}`)
      const apiData = await response.json()

      setUpdatingAccount(apiData)
    }
    fetchAccount()
  }, [accountId])

  const handleFieldChange = event => {
    const value = event.target.value
    const fieldName = event.target.id

    const updatedAccount = { ...updatingAccount, [fieldName]: value }

    setUpdatingAccount(updatedAccount)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    fetch(`/api/Accounts/${accountId}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatingAccount),
    })
      .then(response => response.json())
      .then(apiResponse => {
        if (apiResponse.status === 400) {
          setErrorMessage(Object.values(apiResponse.errors).join(' '))
        } else {
          history.push('/accounts')
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
                id="accountName"
                value={updatingAccount.accountName}
                placeholder="Account Name"
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
                id="accountEmail"
                value={updatingAccount.accountEmail}
                placeholder="Account Email"
                onChange={handleFieldChange}
              />
            </div>
            <div className="update-form-group signup-form-group">
              <img
                alt="apiKey"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAB3klEQVRIie2UP2gUQRSHvzd3HpjszCqIhRCRpA1YmOI8SCCV2gYrwU6E2AlqJSiCBhELwRQKthailYUGRRG59SotxD9VwOYgiITsbhSizrMwB3vjSu5Oy/vBwPKbN++bN/N2YKihNiWh8RyqtSiaMSJ1hV2IZKi+GR0ZebJ/ZWX9v4Cazh0HLovqWEnsqsLVjSy7Pgs/BgIpSOLcoqjOb7lCdanm3NxUu/21H5ABeBVF53uCAIgc+p7nd/qBAEgzjifE+/dALZhbBz4C48DOEuCRRpo+7hVUNd7PawgRWSRNzzbgm4JJrD0tcI3CnYrquVYcf+65osTat8BkwXtxMMtmBbQYmFh7CzjZa+JQBtjXRRZ5EEIAjDH3B4V0QF1JdbNBQv0s+ef6BX3qclTntCSp8f7ov4LCzplpOXczge3wu8LE2jMKJ4K4Z8aYqeIAbgcxy505eRnH4xXvP/D39p4AdvyxRZHDjTRdKlpN5y6K6oWC9a6RZZMAZnptbVlUL5VUOwocKIWo3g0hW6kKUM/zKy3n9qjqqR7WPCLPw2MEoCLy0Ku2Cxta7Xx2XXri3DG8X0Bkb0meLwoLG1l2Y+BHtah7UBmLomkVqQO7VSQ1qq+3Wfu034d0qKFK9Qu6+KCg9sbCaQAAAABJRU5ErkJggg=="
              />
              <input
                type="text"
                className="form-control"
                id="apiKey"
                value={updatingAccount.apiKey}
                placeholder="API Key"
                onChange={handleFieldChange}
              />
            </div>
            <div className="update-form-group signup-form-group">
              <img
                alt="xProfileId"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAADFElEQVRIibWVTWhcZRSGn/PNlQ6Z+93JZKMu1GAQxC5aTBvS/NKu3CjiIuBGtIKuLCJuYpd2qYEqilmVFqSgIFpEECQt1JkEjSi1RNy0GtRaAmF+bhqSzL2vizRxOk6SqU1e+Bb3fOe8zznnwr2wR/rW++FiZ+cjG89ur0AO3qJeP7ynoGnvnwF6V4Pgm41YsJuAmSh6TNJ4Ck9LGjtaLpd3FVSKoqeQTqTSEYPJRHpiJI4XGnPuCVQKw1HM3pEUGby7ks2OHV1YiO+t7WaI92+WvK9Me//iJ5DZVfMNTYfhWDGK5kveP74nAICLEBSjaL4Yhsfupq7lO5rp6orSev24pP1mdkNJ8tng0tJPAPvCcBApHojjKYBiLnfQMpnnJD1oZlddEJzpX1ysNntac+ByLncg49znQHfT1RTSR3Juv0mHTDons1eB5smuuzR9tn9p6cqWoGI+32NpWgTu334RO+rvxLnB4Url2kZg88twEQJL0/O7AAF4IJMkn87Cff8BZb1/Azjcsuz/yOzJVe9fvwN0OZ8vCMYb8yR9DJy9C+vxxLke4M/G2GyhkN8EBUlyAui8A2Q26Zx7v12KzP6oVyp/AbcawoWVtbXXAJzWz/GGUb5OnOtZq9W+X6xUrt7u8ovtJpE0atIH+7y/aXDJnOsFrgOY2csC52bCcASzhzfLzAqZJOn13oc+n+/IJEkv0LXlJFJpNY6/A2IgkvRDf6Xyo/5dYfd0GA5bMYpOmXSy2SCFkcC5W2mazu6wtSWgDHyZml1w0hnW19fd0PzbgUlDraodTKRpmu4AAcgBudTswlC1+tW09zcEBxoTTBqyYhTNm/RQG4Y7qYzZb0gHW9z9biXvl4Fsm2aXgPNIhtnzwGibdcsBUG0DtIzZ+EC1erohNlmKoheQPmR9fdup4jC7skPSnJMONUEAGKhWzzmpD/hlOwNJPzuDiS3uE6TTuY6Ovv44ntvKpD+O51ay2T6T3gOSVjnm3IQBFL1/yeAU4A2uCaZSmByq1X7drtNm3f7jvmJwTPAoUDU4eaRWO/sPMwE0zuMI/AUAAAAASUVORK5CYII="
              />
              <input
                type="integer"
                className="form-control"
                id="xboxProfileUserId"
                value={updatingAccount.xboxProfileUserId}
                placeholder="Xbox User Profile ID"
                onChange={handleFieldChange}
              />
            </div>
            <div className="signup-btn-container">
              <button type="submit" className="btn signup-btn">
                Update Account
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

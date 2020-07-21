import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { isNumber } from 'util'

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
    <div className="signup-card-container">
      <section className="signup-card">
        <div className="signup-img">
          <img
            src="https://lh3.googleusercontent.com/xu-mhdu9qDSlyTzNsNBCrKXss4LRfyB95ElQymkF3jSF1UJ3I6mbvoey6_QADDtmUeDHiReUurfIGqYG-r0qlhZrSgyhvsgnKpeyYgrNgVDlR88NYcYLL_S7YCFdmVCVFsTZDY2AOo0=w1920-h1080"
            width="130rem"
            height="80rem"
            alt="GHLogo"
          />
        </div>
        <div className="signup-title">Evolution X</div>
        <div className="card-body">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <form className="signup-form" onSubmit={handleFormSubmit}>
            <div className="signup-form-group">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABuUlEQVRIie2Vv2sUURDHP9+3IYW8NakMiY3YWKQNRE5Ri8DZWMTaUgv/gutFEJI+2NlYSwqxsBCFyDWCpAiHFtpdGbx7iz8uccdCN+ye7t3uemW+1Zt5M/N5b3i7A6dqKOWNA5gfeN8BruBc1Khimv402FtMkq1VGGXuuXzMwPsO0gMAzBpxkBC0v3gPSfIwc7tCkHPXmlX/B8+563m7cCPMivbf+gy8/LNuAxdKI8dqTSuc1zNCuNOCbwDvVlbOjEJ4CmxWSXbTQwD4jnQvgwCs9ftfke4CP2YHMuu1hsPDcXdrODxE6s0OJJ2bcIil2YHgfNf72+PObhzfAparFKj8GEx60vV+6ShNdwEi5zYNHlXNr/Pqzpq0MxdFOzVyTlS1df+tKjcyoAvsmtknpL5AZrYs6SK/v6PLjP0364JeRXB/PYSPE2K29+L4koPHwI2yoPLWmb2fD+HmFAgAV0P4sBBCW7BfG2TOvViDo2mQTKswSqXnZfulrROsv43jTlVQllMNJB2fzCGzDcFGHVBhhknH+a1C6yxN39QqPEFK09d5u3CjxSTZGngvZjDKF5Jku/EpT5XXL/0ug2gFVetXAAAAAElFTkSuQmCC" />
              <input
                type="text"
                className="form-control"
                id="userName"
                value={newUser.userName}
                placeholder="User Name"
                onChange={handleFieldChange}
              />
            </div>

            <div className="signup-form-group">
              <img src="data:image/png;base64,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" />
              <input
                type="email"
                className="form-control"
                id="email"
                value={newUser.email}
                placeholder="Email"
                onChange={handleFieldChange}
              />
            </div>

            <div className="signup-form-group">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB8UlEQVRIidWUz2vTcBjGnydmSbrlm7QXL6t/gE4QxcMcO0zxIg7UgycVT/YieNe/xAkevQviL9yUgc1JEBR/7CKIQzyUrku6bq3d9/VglZombVK2g88pvL8+z/uGBNhncVTBE8AueV5FRK4AONprei/kAz8M780AnbEBQaEwTdN8LMCxxAKRt1rrxflW63vaDGOY877hnwS4qG3b07btAbgEYA3kccMwHn0ArGFGE1X1vFuBUhIo9fFNqeTH86+KxWKg1OdAKQlc92buDfj75hDg9smNjc14/nSj0aDIHQAgeTU3AMARABDbfplqwrKWeyZmxgG4ADBfq0VpBbP1eth7VKkm4oGq552nyBKA6SHwJK2TrJwKw6f9wYENKHJ3jOEAUNbAUjyYdKJyQmwNIgtWFFl+FNnQ+iyALwnmDmUBDEjIa3PN5mrX9xcarjs7t7W1IiI3svSOBoi0jN1dP1BqUWv9jORzAbjZbFazAMyRFeSkkC/6gKsEpDo1dXhvAP/qnXacy68dR3Fn536Whkzv4I9E6+s/a7Vto91+CPLEXgO2tWl+dZQ6B+BM1qY8Jyoc0LouORqAfBv86IocJHBhvwDdyYmJjpDtPICkE60j+Wsud7rdWkoPAEDIb/HY4L+IrPQgWQ39HU6gkpb/f/ULNY+pKBeKFisAAAAASUVORK5CYII="></img>
              <input
                type="password"
                className="form-control"
                id="password"
                value={newUser.password}
                placeholder="Password"
                onChange={handleFieldChange}
              />
            </div>

            <div className="signup-form-group">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAB3klEQVRIie2UP2gUQRSHvzd3HpjszCqIhRCRpA1YmOI8SCCV2gYrwU6E2AlqJSiCBhELwRQKthailYUGRRG59SotxD9VwOYgiITsbhSizrMwB3vjSu5Oy/vBwPKbN++bN/N2YKihNiWh8RyqtSiaMSJ1hV2IZKi+GR0ZebJ/ZWX9v4Cazh0HLovqWEnsqsLVjSy7Pgs/BgIpSOLcoqjOb7lCdanm3NxUu/21H5ABeBVF53uCAIgc+p7nd/qBAEgzjifE+/dALZhbBz4C48DOEuCRRpo+7hVUNd7PawgRWSRNzzbgm4JJrD0tcI3CnYrquVYcf+65osTat8BkwXtxMMtmBbQYmFh7CzjZa+JQBtjXRRZ5EEIAjDH3B4V0QF1JdbNBQv0s+ef6BX3qclTntCSp8f7ov4LCzplpOXczge3wu8LE2jMKJ4K4Z8aYqeIAbgcxy505eRnH4xXvP/D39p4AdvyxRZHDjTRdKlpN5y6K6oWC9a6RZZMAZnptbVlUL5VUOwocKIWo3g0hW6kKUM/zKy3n9qjqqR7WPCLPw2MEoCLy0Ku2Cxta7Xx2XXri3DG8X0Bkb0meLwoLG1l2Y+BHtah7UBmLomkVqQO7VSQ1qq+3Wfu034d0qKFK9Qu6+KCg9sbCaQAAAABJRU5ErkJggg==" />
              <input
                type="text"
                className="form-control"
                id="apiKey"
                value={newUser.apiKey}
                placeholder="API Key"
                onChange={handleFieldChange}
              />
            </div>

            <div className="signup-form-group">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAADFElEQVRIibWVTWhcZRSGn/PNlQ6Z+93JZKMu1GAQxC5aTBvS/NKu3CjiIuBGtIKuLCJuYpd2qYEqilmVFqSgIFpEECQt1JkEjSi1RNy0GtRaAmF+bhqSzL2vizRxOk6SqU1e+Bb3fOe8zznnwr2wR/rW++FiZ+cjG89ur0AO3qJeP7ynoGnvnwF6V4Pgm41YsJuAmSh6TNJ4Ck9LGjtaLpd3FVSKoqeQTqTSEYPJRHpiJI4XGnPuCVQKw1HM3pEUGby7ks2OHV1YiO+t7WaI92+WvK9Me//iJ5DZVfMNTYfhWDGK5kveP74nAICLEBSjaL4Yhsfupq7lO5rp6orSev24pP1mdkNJ8tng0tJPAPvCcBApHojjKYBiLnfQMpnnJD1oZlddEJzpX1ysNntac+ByLncg49znQHfT1RTSR3Juv0mHTDons1eB5smuuzR9tn9p6cqWoGI+32NpWgTu334RO+rvxLnB4Url2kZg88twEQJL0/O7AAF4IJMkn87Cff8BZb1/Azjcsuz/yOzJVe9fvwN0OZ8vCMYb8yR9DJy9C+vxxLke4M/G2GyhkN8EBUlyAui8A2Q26Zx7v12KzP6oVyp/AbcawoWVtbXXAJzWz/GGUb5OnOtZq9W+X6xUrt7u8ovtJpE0atIH+7y/aXDJnOsFrgOY2csC52bCcASzhzfLzAqZJOn13oc+n+/IJEkv0LXlJFJpNY6/A2IgkvRDf6Xyo/5dYfd0GA5bMYpOmXSy2SCFkcC5W2mazu6wtSWgDHyZml1w0hnW19fd0PzbgUlDraodTKRpmu4AAcgBudTswlC1+tW09zcEBxoTTBqyYhTNm/RQG4Y7qYzZb0gHW9z9biXvl4Fsm2aXgPNIhtnzwGibdcsBUG0DtIzZ+EC1erohNlmKoheQPmR9fdup4jC7skPSnJMONUEAGKhWzzmpD/hlOwNJPzuDiS3uE6TTuY6Ovv44ntvKpD+O51ay2T6T3gOSVjnm3IQBFL1/yeAU4A2uCaZSmByq1X7drtNm3f7jvmJwTPAoUDU4eaRWO/sPMwE0zuMI/AUAAAAASUVORK5CYII=" />
              <input
                type="integer"
                className="form-control"
                id="xboxProfileUserId"
                value={newUser.xboxProfileUserId}
                placeholder="Xbox User Profile ID"
                onChange={handleFieldChange}
              />
            </div>
            <div className="signup-btn-container">
              <button type="submit" className="btn signup-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

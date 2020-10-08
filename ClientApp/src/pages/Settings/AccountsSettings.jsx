import React, { useState, useEffect } from 'react'
import { getUser, getAccounts, authHeader } from '../../auth'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../../images/Login Image.png'

export function UserAccount(props) {
  const [showApiKey, setShowApiKey] = useState(false)

  const [showXboxId, setShowXboxId] = useState(false)

  const [showEmail, setShowEmail] = useState(false)

  const [xboxAccount, setXboxAccount] = useState()

  const [loading, setLoading] = useState(false)

  const history = useHistory()

  useEffect(() => {
    function loadAccountInfo() {
      const url = `https://xapi.us/v2/${props.xboxProfileUserId}/new-profile`

      fetch(url, {
        method: 'GET',
        headers: {
          'X-AUTH': props.apiKey,
        },
      })
        .then(response => response.json())
        .then(account => {
          setXboxAccount(account)
          setLoading(true)
        })
    }

    loadAccountInfo()
  }, [props.apiKey, props.xboxProfileUserId])

  const handleDelete = event => {
    event.preventDefault()

    fetch(`/api/Accounts/${props.id}`, {
      method: 'DELETE',
      headers: { ...authHeader() },
    }).then(response => {
      if (response.status === 204) {
        history.push('/view-accounts')
      }
    })
  }

  return (
    <div className="account-settings-card viewAccount">
      {loading === false && (
        <div className="spinner mt-5 pt-5 d-flex justify-content-center align-items-center">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {loading === true && (
        <div>
          <section className="account-settings-card-header">
            <h3>{props.accountName}</h3>

            <div className="account-settings-dropdown">
              <img
                className="account-settings-dropbtn"
                src="https://img.icons8.com/ios-filled/24/000000/settings.png"
              />
              <div className="account-settings-dropdown-content">
                <button type="account-settings-button">
                  <Link
                    className="btn settings-button"
                    to={`/settings/user/account/edit/${props.id}`}
                  >
                    Update
                  </Link>
                </button>
                <button type="account-settings-button" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </section>
          <section className="account-settings-info">
            <ul className="account-settings-list">
              <li>
                <button
                  className="btn settings-button"
                  onClick={() => setShowEmail(!showEmail)}
                >
                  Email
                </button>
              </li>
              <li>
                <button
                  className="btn settings-button"
                  onClick={() => setShowApiKey(!showApiKey)}
                >
                  API Key
                </button>
              </li>
              <li>
                <button
                  className="btn settings-button"
                  onClick={() => setShowXboxId(!showXboxId)}
                >
                  Xbox ID
                </button>
              </li>
            </ul>
            <ul className="account-settings-list">
              <li>
                {!showEmail && <div>____________________</div>}
                {showEmail && <div>{props.accountEmail}</div>}
              </li>
              <li>
                {!showApiKey && <div>____________________</div>}
                {showApiKey && (
                  <div className="account-settings-data">{props.apiKey}</div>
                )}
              </li>
              <li>
                {!showXboxId && <div>____________________</div>}
                {showXboxId && <div>{props.xboxProfileUserId}</div>}
              </li>
            </ul>
          </section>

          <section className="account-settings-xbox">
            <h3>Xbox Account</h3>
            <div className="account-setting-xbox-basic-info">
              <img
                className="account-setting-xbox-img"
                src={xboxAccount.displayPicRaw}
                width="100rem"
                height="100rem"
                alt="profile"
              />
              <div className="account-setting-xbox-gamer-info">
                <h3>{xboxAccount.gamertag}</h3>
                <h4>{xboxAccount.realName}</h4>
                <h3>
                  {' '}
                  <img
                    alt="gamerscore"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACF0lEQVRIic3Xu2sUURTH8U9MYjaIEDWYh88YxSKCiCBYWfgofIB/gHZiYeEfoYX4CEGEdCKipai9KBGMiNhIRBsfINF0KYxLEkFjcWeWybrZuRN30R+cYu7Mud87Z8459w7/SC0Fnu3EIRxAHzYm45P4iqd4jNlGLW4Qd1DGQo59x20M/A2whBHMRwCrbR7D6CgK7RZCVxRYbc/RGwvtxacGQFP7iJ48aClZZaOgqY3LCftIE6CpXVsKOmB5iVQk4QZTWGsGfAN76oUjURk3k+fvYwKbsSbHrxVdeJgd7BRqMG/V77AF63AaZ7Eb7RiN8J8R8qiiExFOc9iJfZiuuncpeaOXEfMcy4KvRjjcFVrsqxr3fuGkkEB581yBtgS8Qb4eYRf21rjXggcRc1RYKbgvwuEztleNlfEjc92G1Tnz9MOKCGA9ncPajB2J8FnIgqciHDYJ7S+rUSHRpnFK3KYwlQV/iXA4LNTs+8zYKqF+u/BayPo8TWYvjosrpx3Yb3E5/cTF5CVeRMxzNAuObSBvhJCnDeQMhoQavh7hX2kgaahnhfaXpyG8xYXk+ptQvxM4H+F/T4jcIm1NBpu5SWxbakXDTQRfrheKdow1AfpMRKn1CPXaKOgHrM+Dpupu0JuPizhvVatD2G2Wk3BzwjddWRSa1YBwSI+p8xncEg4LdVXkF6aEg8IvTL8/f2HG8ESNOv2v9BvNTaDnqkETWAAAAABJRU5ErkJggg=="
                  />{' '}
                  {xboxAccount.gamerScore}
                </h3>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export function ViewAccounts() {
  const user = getUser()

  const [errorMessage, setErrorMessage] = useState()

  const [accounts, setAccounts] = useState()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/Accounts/UserId/${user.id}`)
      const apiData = await response.json()
      setAccounts(apiData)
      setLoading(true)
    }

    fetchUser()
  }, [user.id])

  return (
    <section className="user-page">
      <h3>{user.userName}'s Accounts</h3>

      <Link
        className="btn settings-button"
        to={`/settings/add-account/${user.id}`}
      >
        Add Account
      </Link>

      {loading === false && (
        <div className="spinner mt-5 pt-5 d-flex justify-content-center align-items-center">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {loading === true && (
        <section className="user-container">
          {accounts.map(account => (
            <UserAccount
              key={account.id}
              id={account.id}
              accountName={account.accountName}
              accountEmail={account.accountEmail}
              apiKey={account.apiKey}
              xboxProfileUserId={account.xboxProfileUserId}
            />
          ))}
        </section>
      )}
    </section>
  )
}

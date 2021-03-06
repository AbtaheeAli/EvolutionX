import React, { useState, useEffect } from 'react'
import { getUser, getAccounts } from '../../auth'
import { set } from 'date-fns'

export function Gamercard(props) {
  const [account, setAccount] = useState({})

  const [accountDetails, setAccountDetails] = useState({})

  const [gamerCard, setGamerCard] = useState({})

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    function loadGamerCard() {
      setLoading(false)
      const url = `https://xapi.us/v2/${props.chosenAccount.xboxProfileUserId}/gamercard`

      fetch(url, {
        method: 'GET',
        headers: {
          'X-AUTH': props.chosenAccount.apiKey,
        },
      })
        .then(response => response.json())
        .then(gamerCardInfo => {
          setGamerCard(gamerCardInfo)
        })
    }

    function loadAccountInfo() {
      const url = `https://xapi.us/v2/${props.chosenAccount.xboxProfileUserId}/new-profile`

      fetch(url, {
        method: 'GET',
        headers: {
          'X-AUTH': props.chosenAccount.apiKey,
        },
      })
        .then(response => response.json())
        .then(account => {
          setAccount(account)
          setAccountDetails(account.detail)
          setLoading(true)
        })
    }

    loadAccountInfo()
    loadGamerCard()
  }, [props.chosenAccount.xboxProfileUserId, props.chosenAccount.apiKey])

  return (
    <div className="gamer-card-container">
      {loading === false && (
        <div className="spinner mt-5 pt-5 d-flex justify-content-center align-items-center">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {loading === true && (
        <section className="gamer-card">
          <div className="gamer-card-header">
            <h4>{account.presenceState}</h4>
            {account.presenceText === 'Offline' || (
              <h4>: {account.presenceText}</h4>
            )}
          </div>
          <div className="gamer-card-text">
            <h3>{account.realName}</h3>
            <h3>
              {' '}
              <img
                alt="gamerscore"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACF0lEQVRIic3Xu2sUURTH8U9MYjaIEDWYh88YxSKCiCBYWfgofIB/gHZiYeEfoYX4CEGEdCKipai9KBGMiNhIRBsfINF0KYxLEkFjcWeWybrZuRN30R+cYu7Mud87Z8459w7/SC0Fnu3EIRxAHzYm45P4iqd4jNlGLW4Qd1DGQo59x20M/A2whBHMRwCrbR7D6CgK7RZCVxRYbc/RGwvtxacGQFP7iJ48aClZZaOgqY3LCftIE6CpXVsKOmB5iVQk4QZTWGsGfAN76oUjURk3k+fvYwKbsSbHrxVdeJgd7BRqMG/V77AF63AaZ7Eb7RiN8J8R8qiiExFOc9iJfZiuuncpeaOXEfMcy4KvRjjcFVrsqxr3fuGkkEB581yBtgS8Qb4eYRf21rjXggcRc1RYKbgvwuEztleNlfEjc92G1Tnz9MOKCGA9ncPajB2J8FnIgqciHDYJ7S+rUSHRpnFK3KYwlQV/iXA4LNTs+8zYKqF+u/BayPo8TWYvjosrpx3Yb3E5/cTF5CVeRMxzNAuObSBvhJCnDeQMhoQavh7hX2kgaahnhfaXpyG8xYXk+ptQvxM4H+F/T4jcIm1NBpu5SWxbakXDTQRfrheKdow1AfpMRKn1CPXaKOgHrM+Dpupu0JuPizhvVatD2G2Wk3BzwjddWRSa1YBwSI+p8xncEg4LdVXkF6aEg8IvTL8/f2HG8ESNOv2v9BvNTaDnqkETWAAAAABJRU5ErkJggg=="
              />{' '}
              {account.gamerScore}
            </h3>
          </div>
          <div className="gamer-card-gamertag">
            <h2 className="gamercard-gamertag">{account.gamertag}</h2>
          </div>
          <div className="gamer-card-img-container">
            <img
              className="gamer-card-img"
              src={account.displayPicRaw}
              width="280rem"
              height="280rem"
              alt="profile"
            />
          </div>
          <div className="gamer-card-friends-followers">
            <div>
              <h4>Friends</h4>
              <h4># {accountDetails.followingCount}</h4>
            </div>
            <div>
              <h4>Followers</h4>
              <h4># {accountDetails.followerCount}</h4>
            </div>
          </div>
          <div className="gamer-card-footer">
            <h4>Location: {gamerCard.location}</h4>
            <h4>Bio: {gamerCard.bio}</h4>
          </div>
        </section>
      )}
    </div>
  )
}

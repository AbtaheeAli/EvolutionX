import React, { useState, useEffect } from 'react'
import GamercardData from '../Gamercard.json'

export function Gamercard() {
  const [account, setAccount] = useState({})
  const [accountDetails, setAccountDetails] = useState({})

  function loadAccountInfo() {
    const url = `https://xapi.us/v2/2533274825461278/new-profile`

    fetch(url, {
      method: 'GET',
      headers: {
        'X-AUTH': '1043a66f8177cfafd16c780666f7ebb48d2b4a78',
      },
    })
      .then(response => response.json())
      .then(account => {
        setAccount(account)
        setAccountDetails(account.detail)
      })
  }

  useEffect(() => {
    loadAccountInfo()
  }, [])

  return (
    <div className="gamer-card-container">
      <section className="gamer-card">
        <article>
          <a href="#">
            <img
              className="avatar"
              src={account.displayPicRaw}
              width="300rem"
              height="300rem"
              alt="GHLogo"
            />
          </a>
        </article>
        <article>
          <div className="gamer-card-text">
            <h3 className="gamer-name-score gamer-card-text-first-item score">
              {account.realName}
            </h3>
            <h3 className="gamer-name-score gamer score">
              G {account.gamerScore}
            </h3>
          </div>
          <h2 className="gamer-tag">{account.gamertag}</h2>
          <div className="gamer-card-text">
            <div className="gamer-card-ff gamer-details">
              <h4 className="gamer-card-text-first-item friends">Friends</h4>
              <h4 className="gamer-card-text-first-item">
                # {accountDetails.followingCount}
              </h4>
            </div>
            <div className="gamer-card-ff">
              <h4 className="followers">Followers</h4>
              <h4># {accountDetails.followerCount}</h4>
            </div>
          </div>
          <h4 className="bio-location">Bio: {GamercardData.bio}</h4>
          <h4 className="bio-location"> Location: {GamercardData.location}</h4>
        </article>
      </section>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import GamercardData from '../Gamercard.json'

export function Gamercard() {
  const [account, setAccount] = useState({})
  const [accountDetails, setAccountDetails] = useState({})
  const [gamerCard, setGamerCard] = useState({})

  function loadGamerCard() {
    const url = `https://xapi.us/v2/2533274825461278/gamercard`

    fetch(url, {
      method: 'GET',
      headers: {
        'X-AUTH': '1043a66f8177cfafd16c780666f7ebb48d2b4a78',
      },
    })
      .then(response => response.json())
      .then(gamerCardInfo => {
        setGamerCard(gamerCardInfo)
      })
  }

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

  useEffect(() => {
    loadGamerCard()
  }, [])

  return (
    <div className="gamer-card-container">
      <section className="gamer-card">
        <article>
          <h4>
            {account.presenceState} : {account.presenceText}
          </h4>
          <div className="gamer-card-text">
            <h3 className="gamer-name-score gamer-card-text-first-item score">
              {account.realName}
            </h3>
            <h3 className="gamer-name-score gamer score">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACvElEQVRYhc2YOU9VQRiGnzGgooBRWbRwK4xYqFErbIh7YmHsbbTXELfY2RiDSyz9DZhY21pKIBdcGo2FsXIFEiAKGuGxOOfK8XDhzrlcEt/kFmdmvvc8Z2buNwv8Rwq1BKmdQDfQBbQBLcAU8A14CwyEEL7WC7ISQKvaq5bUOZfWXNquV22pJ0SjelMdrwKwmMbVG2rjckH2qq9rhMjrpbqnVpAT6mSdQMqaUI/XAjJTZ5CyZtQjsSB7rX+P5PVZ3V4NZLX6aoVByho2N6lX5XiuAPuLDOkydAjozRb8TXpqK/AB2FjQdBr4CjQBHQVjx4GdIYQp+LdnLhYEGQJOA60hhJ0hhE5gB3AH+BnpsQm4sKA0HcNYPTFJhlvUW+pj9ZF6KvXqMf7fOJQH6bR6ii/rg9qs7lNHK9TfSz1vR/rNqe1ZmHORgapX05jSEubd6sECnmdhfs50xU4U4Kl6ADi8SH0AngMjBTy7sjDtSzTMahZ4Bxws8KIYdQA0pA9NkUFTIQTVDbny78DVCu0fAs0RvuuyMNORMM1qACZy5b+B4czzpxDCR/VOJMwPmB+m2F1ZA7AbeJEr3wCUMr/zaXnsxupLFuZtZBDAmRDCqwpAZQk8M9m7rIn0nH+/2mF8nnmvrlf3q2MV6vtSz/uRfrNq27+fs3jeqKR+tUHdapKB+9UH6tHU64T6K9JrcGHfJpvnIhpQT6oNGY9d6t0CIKqXyvH1WLVnSCZgM7C5YOwYsGvBqh1CmAT6CpoBrCVZrYuCAPSVQRbIZCV+WXC4alXJascXdY/JLn4l9UndFtV36jFX7nQwbezpIAPUnX5BPfVN7SkEkgHaro7UCaRk7NAsAdSoXrdyto3RqHrN5Z61c1At6mV1yOpLx6w6mLaPWbWB2u9n2pm/n2kHWoFJkvuZNyT3M6O1eP83+gMJZOrdi4YA4AAAAABJRU5ErkJggg==" />
              {account.gamerScore}
            </h3>
          </div>
          <h2 className="gamer-tag">{account.gamertag}</h2>
          <img
            className="avatar"
            src={account.displayPicRaw}
            width="300rem"
            height="300rem"
            alt="GHLogo"
          />
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
          <h4 className="bio-location">Bio: {gamerCard.bio}</h4>
          <h4 className="bio-location"> Location: {gamerCard.location}</h4>
        </article>
      </section>
    </div>
  )
}

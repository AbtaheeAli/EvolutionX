import React, { useState, useEffect } from 'react'

function SingleXboxOneGame(props) {
  return (
    <section className="xbox-one-game-card">
      <article>
        <a href="#">
          <img
            className="Game"
            src="https://compass-ssl.xbox.com/assets/a5/f4/a5f4cc7b-974b-48e4-b976-f57b3bb97665.jpg?n=Halo-Franchise-2019_Super-Hero-1400_MCC_1920x1080_02.jpg"
            width="200rem"
            height="200rem"
            alt="GHLogo"
          />
        </a>
      </article>
      <article>
        <div className="xbox-one-game-info">
          <p>Title: {props.Title}</p>
          <p>Total Earned Achievements: {props.EarnedAchievements}</p>
          <p>Current Gamerscore: {props.CurrentGamerscore} G</p>
          <p>Max Gamerscore: {props.MaxGamerscore} G</p>
          <p>Last Unlock: {props.LastUnlockedAchievementDate}</p>
        </div>
      </article>
    </section>
  )
}

export function XboxOneGames() {
  const [games, setGames] = useState([])

  function loadGames() {
    const url = `https://xapi.us/v2/2533274825461278/xboxonegames/`

    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'X-AUTH': '1043a66f8177cfafd16c780666f7ebb48d2b4a78',
      },
    })
      .then(response => response.json())
      .then(apiData => {
        setGames(apiData.titles)
      })
  }

  useEffect(() => {
    loadGames()
  }, [])

  return (
    <section>
      {games.map(game => (
        <SingleXboxOneGame
          Key={game.titleId}
          Title={game.name}
          CurrentGamerscore={game.currentGamerscore}
          MaxGamerscore={game.maxGamerscore}
          LastUnlockedAchievementDate={game.lastUnlock}
          EarnedAchievements={game.earnedAchievements}
        />
      ))}
    </section>
  )
}

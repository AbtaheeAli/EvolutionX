import React from 'react'
import XboxOneGamesData from '../XboxOneGames.json'

export function XboxOneGames() {
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
          <p>Title: Halo: Master Chief Collection</p>
          <p>Current Gamerscore: 12 G</p>
          <p>Max Gamerscore: 125000 G</p>
          <p>
            Last Unlock: Game Breaker: Halo: Reach: Kill 10 enemies while using
            a Jetpack
          </p>
        </div>
      </article>
    </section>
  )
}

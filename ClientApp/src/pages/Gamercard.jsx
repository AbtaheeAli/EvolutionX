import React from 'react'
import GamercardData from '../Gamercard.json'

export function Gamercard() {
  return (
    <div className="gamer-card-container">
      <section className="gamer-card">
        <article>
          <a href="#">
            <img
              className="avatar"
              src={GamercardData.avatarBodyImagePath}
              width="300rem"
              height="300rem"
              alt="GHLogo"
            />
          </a>
        </article>
        <article>
          <div className="gamer-card-text">
            <h3 className="gamer-name-score gamer-card-text-first-item score">
              {GamercardData.name}
            </h3>
            <h3 className="gamer-name-score gamer score">
              G {GamercardData.gamerscore}
            </h3>
          </div>
          <h2 className="gamer-tag">{GamercardData.gamertag}</h2>
          <div className="gamer-card-text">
            <div className="gamer-card-ff gamer-details">
              <h4 className="gamer-card-text-first-item friends">Friends</h4>
              <h4 className="gamer-card-text-first-item"># 136</h4>
            </div>
            <div className="gamer-card-ff">
              <h4 className="followers">Followers</h4>
              <h4># 147</h4>
            </div>
          </div>
          <h4 className="bio-location">Bio: {GamercardData.bio}</h4>
          <h4 className="bio-location"> Location: {GamercardData.location}</h4>
        </article>
      </section>
    </div>
  )
}

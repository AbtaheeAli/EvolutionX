import React from 'react'

export function Gamercard() {
  return (
    <section className="gamer-card">
      <article>
        <a href="#">
          <img
            className="avatar"
            src="https://i.pcmag.com/imagery/articles/03q56RTgHk4cQvs07pQt4I9-1.fit_scale.size_2698x1517.v1569490700.jpg"
            width="300rem"
            height="300rem"
            alt="GHLogo"
          />
        </a>
      </article>
      <article>
        <div className="gamer-card-text">
          <h3 className="gamer-card-text-first-item score">Cody Banks</h3>
          <h3 className="score gamer">G 46994</h3>
        </div>
        <h2>UNPROFESSI0NAL</h2>
        <div className="gamer-card-text">
          <div className="gamer-card-ff">
            <h4 className="gamer-card-text-first-item friends">Friends</h4>
            <h4 className="gamer-card-text-first-item"># 136</h4>
          </div>
          <div className="gamer-card-ff">
            <h4 className="followers">Followers</h4>
            <h4># 146</h4>
          </div>
        </div>
        <h4>Bio: Yo yo yo</h4>
        <h4>Location: Florida</h4>
      </article>
    </section>
  )
}

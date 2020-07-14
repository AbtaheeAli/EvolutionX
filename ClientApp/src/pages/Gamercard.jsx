import React from 'react'

export function Gamercard() {
  return (
    <section className="gamer-card">
      <article>
        <a href="#">
          <img
            className="avatar"
            src="https://images-eds-ssl.xboxlive.com//image?url=Hr2eiH8yWKd4q_oa.xgbMnOHX9HRDEMKjkwIswRQCT4jE324VJHdcCl8SxAtO7EP62tTan8jAaRQWIHkwOC9kjJqC2axhRCZody8xLNW7oGQhofiInwTIV_a9GIDBFb.Ryg7085c2rjCluALka9D.pFQ8ixTrj_g8.D_EURLv9g-&format=png"
            width="300rem"
            height="300rem"
            alt="GHLogo"
          />
        </a>
      </article>
      <article>
        <div className="gamer-card-text">
          <h3 className="gamer-name-score gamer-card-text-first-item score">
            Cody Banks
          </h3>
          <h3 className="gamer-name-score gamer score">G 46994</h3>
        </div>
        <h2 className="gamer-tag">UNPROFESSI0NAL</h2>
        <div className="gamer-card-text">
          <div className="gamer-card-ff gamer-details">
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

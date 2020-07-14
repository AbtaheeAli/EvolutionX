import React from 'react'

export function RecentAchievements() {
  return (
    <section className="achievement">
      <article className="achievement-title">
        <div>
          <img
            className="avatar"
            src="https://i.pcmag.com/imagery/articles/03q56RTgHk4cQvs07pQt4I9-1.fit_scale.size_2698x1517.v1569490700.jpg"
            width="120rem"
            height="120rem"
            alt="GHLogo"
          />
        </div>
        <div>
          <h3>UNPROFESSI0NAL</h3>
          <h4>unlocked an achievement</h4>
        </div>
        <div className="achievement-date">
          <p>date</p>
        </div>
      </article>
      <article className="achievement-image-container">
        <img
          className="achievement-image"
          src="https://i.pcmag.com/imagery/articles/03q56RTgHk4cQvs07pQt4I9-1.fit_scale.size_2698x1517.v1569490700.jpg"
          alt="GHLogo"
        />
      </article>
      <article>
        <div>
          Game Breaker: Halo: Reach: Kill 10 enemies while using a Jetpack
        </div>
        <div>Halo: The Master Chief Collection</div>
      </article>
    </section>
  )
}

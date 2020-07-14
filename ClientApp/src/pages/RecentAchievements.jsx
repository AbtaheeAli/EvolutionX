import React from 'react'

export function RecentAchievements() {
  return (
    <section className="achievement">
      <article className="achievement-title">
        <div>
          <img
            className="user-image"
            src="https://images-eds-ssl.xboxlive.com//image?url=Hr2eiH8yWKd4q_oa.xgbMnOHX9HRDEMKjkwIswRQCT4jE324VJHdcCl8SxAtO7EP62tTan8jAaRQWIHkwOC9kjJqC2axhRCZody8xLNW7oGQhofiInwTIV_a9GIDBFb.Ryg7085c2rjCluALka9D.pFQ8ixTrj_g8.D_EURLv9g-&format=png"
            width="80rem"
            height="80rem"
            alt="GHLogo"
          />
        </div>
        <div className="achievement-text">
          <div>
            <p>
              <strong>UNPROFESSI0NAL</strong>
            </p>
            <p>unlocked an achievement</p>
          </div>
          <div className="achievement-date">7/4/2020</div>
        </div>
      </article>
      <article className="achievement-image-container">
        <img
          className="achievement-image"
          src="http://images-eds.xboxlive.com//image?url=27S1DHqE.cHkmFg4nspsdzzPtiJjO.eHkU64YiWae5H0v2Mjb38MsfaeMOG5B0KXW1JWq2sEq.UqlGL56HpSnch8IimM1pTb82YDXoRKJtGxAh22XoU0T4OFlHBWgpTjVbyF6e9Yvm38Y6KN2Kb3QQ--"
          alt="GHLogo"
        />
      </article>
      <article className="achievement-footer">
        <div>
          Game Breaker: Halo: Reach: Kill 10 enemies while using a Jetpack
        </div>
        <div>Halo: The Master Chief Collection</div>
      </article>
    </section>
  )
}

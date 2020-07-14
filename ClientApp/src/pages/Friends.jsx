import React from 'react'

export function Friends() {
  return (
    <div>
      <section className="friend-card">
        <article className="friend-card-img">
          <a href="#">
            <img
              className="friendAvatar"
              src="https://i.pcmag.com/imagery/articles/03q56RTgHk4cQvs07pQt4I9-1.fit_scale.size_2698x1517.v1569490700.jpg"
              width="120rem"
              height="120rem"
              alt="GHLogo"
            />
          </a>
        </article>
        <article className="friend-card-text">
          <div>
            <h4 className="friendList">Gamertag: UNPROFESSI0NAL</h4>
            <h4 className="friendList">Reputation: Good</h4>
            <h4 className="friendList">Gamerscore: 1230</h4>
            <h4 className="friendList">TenureLevel: 2</h4>
          </div>
        </article>
      </section>
      <section className="friend-card">
        <article className="friend-card-img">
          <a href="#">
            <img
              className="friendAvatar"
              src="https://i.pcmag.com/imagery/articles/03q56RTgHk4cQvs07pQt4I9-1.fit_scale.size_2698x1517.v1569490700.jpg"
              width="120rem"
              height="120rem"
              alt="GHLogo"
            />
          </a>
        </article>
        <article className="friend-card-text">
          <div>
            <h4 className="friendList"> Gamertag: bob101</h4>
            <h4 className="friendList">Reputation: Good</h4>
            <h4 className="friendList">Gamerscore: 1230</h4>
            <h4 className="friendList">TenureLevel: 2</h4>
          </div>
        </article>
      </section>
    </div>
  )
}

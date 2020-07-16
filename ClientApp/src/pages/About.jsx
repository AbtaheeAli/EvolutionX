import React from 'react'

export function About() {
  return (
    <section className="about-box">
      <article>
        <a href="#">
          <img
            className="Game"
            src="https://i7.pngguru.com/preview/79/769/243/xbox-360-microsoft-studios-fable-legends-xbox-one-xbox-fitness-avatar-thumbnail.jpg"
            width="200rem"
            height="200rem"
            alt="GHLogo"
          />
        </a>
        <p>
          Evolution X is an application that uses an third-party API, XAPI, to
          access the users Xbox Live Account. Once the users are signed in, they
          are able to view their gamer card, Xbox Live friends, messages, recent
          achievement, and their Xbox One Games. S
        </p>
        <small>We are not affiliated with Microsoft or XAPI.</small>
      </article>
    </section>
  )
}

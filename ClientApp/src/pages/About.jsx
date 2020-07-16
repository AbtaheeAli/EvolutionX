import React from 'react'

export function About() {
  return (
    <section className="about-box">
      <article>
        <a href="#">
          <img
            className="Game"
            src="https://lh3.googleusercontent.com/npEQKIiWJ4xmL7L9dFvVSl_LNUcCjPAVNkP1cTBJlGLWjFC89lCWoZedl8utaCQCkgmxSNUrXD4KEQmYhImdIgJJvuCwCoZpTdrCinowj3A8H991UqYvfOZO1-tjYtIvzYch6DtJIO8=w1920-h1080"
            width="200rem"
            height="200rem"
            alt="GHLogo"
          />
        </a>
        <p>
          Evolution X is an application that uses an third-party API, XAPI, to
          access the users Xbox Live Account. Once the users are signed in, they
          are able to view their gamer card, Xbox Live friends, messages, recent
          achievement, and their Xbox One Games.
        </p>
        <small>We are not affiliated with Microsoft or XAPI.</small>
      </article>
    </section>
  )
}

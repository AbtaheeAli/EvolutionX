import React from 'react'
import about from '../images/aboutLogoSmall.png'

export function About() {
  return (
    <div className="about-container">
      <section className="about-box">
        <img
          className="Game"
          src={about}
          width="500rem"
          height="250rem"
          alt="GHLogo"
        />
        <p>
          Evolution X is an application that uses an third-party API, XAPI, to
          access an users Xbox Live Account. Once the users are signed in, they
          are able to view their gamer card, Xbox Live friends, messages, recent
          achievement, and their Xbox One Games.
        </p>
        <p>
          A special thank you to{' '}
          <a
            className="aboutme-links"
            href="https://www.linkedin.com/in/michaelcgrubbs/"
          >
            Michael Grubbs
          </a>{' '}
          for making our website logo, to{' '}
          <a className="aboutme-links" href="https://icons8.com/icons">
            Icons 8
          </a>{' '}
          for providing Evolution X with icons, to{' '}
          <a className="aboutme-links" href="https://xapi.us/">
            XAPI
          </a>{' '}
          for providing an API for Evolution X, and to{' '}
          <a className="aboutme-links" href="https://streetlight.ufhealth.org/">
            Streetlight
          </a>{' '}
          for involving us in this project.
        </p>
        <small>We are not affiliated with Microsoft or XAPI.</small>
      </section>
    </div>
  )
}

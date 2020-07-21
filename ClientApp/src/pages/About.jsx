import React from 'react'

export function About() {
  return (
    <div className="about-container">
      <section className="about-box">
        {/* <article> */}
        <img
          className="Game"
          src="https://lh3.googleusercontent.com/yZvD0AGX3REhD9Qon0D23Dspbym1wx4uiJhKeIrqHC0lE-AEwXxD2z-c-HPjNmbuVKBVQePfcOcBR1zyhAQHMLWESECqTLyhqATL4QipPYOo0S7rNUZpPIIewCZB19TOkmASj_UkTXM=w1920-h1080"
          width="200rem"
          height="200rem"
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
            target="_blank"
          >
            Michael Grubbs
          </a>{' '}
          for making our website logo, to{' '}
          <a
            className="aboutme-links"
            href="https://icons8.com/icons"
            target="_blank"
          >
            Icons 8
          </a>{' '}
          for providing Evolution X with icons, to{' '}
          <a className="aboutme-links" href="https://xapi.us/" target="_blank">
            XAPI
          </a>{' '}
          for providing an API for Evolution X, and to{' '}
          <a
            className="aboutme-links"
            href="https://streetlight.ufhealth.org/"
            target="_blank"
          >
            Streetlight
          </a>{' '}
          for involving us in this project.
        </p>
        <small>We are not affiliated with Microsoft or XAPI.</small>
        {/* </article> */}
      </section>
    </div>
  )
}

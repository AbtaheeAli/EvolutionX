import React from 'react'

export function Instructions() {
  return (
    <div className="instructions-container">
      <section className="instructions-card">
        <div className="instructions-title">
          <h2>XAPI Sign-Up Instructions</h2>
          <h5>It is FREE!</h5>
        </div>
        <div className="instructions-body">
          <ul>
            <li>
              {' '}
              Step 2: Go to{' '}
              <a
                className="aboutme-links"
                href="https://xapi.us/"
                target="_blank"
              >
                XAPI.com
              </a>{' '}
            </li>
            <li>Step 2: Click on Sign in on top left corner of the page</li>
            <li>
              Step 3: Click on "Register" and fill out the form. Go to the email
              you aigned up with and activate your account
            </li>
            <li>
              Step 4:Once you are signed in, you will be directed to connect
              your Xbox Live Account with XAPI.
            </li>
            <li>
              Step 5: Once the steps above are completed, click on the settings
              button on the top left of the header. This will direct you to a
              page where your account information is displayed
            </li>
            <li>
              Step 6: Locatr your API Key and Xbox Profile User ID and copy them
              to your clipboard
            </li>
            <li>
              Step 7: Now you are ready to make an accoutn with Evolution X by
              pasting the API Key and Xbox Profile User ID to the necessary
              forms in our sign-up page
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

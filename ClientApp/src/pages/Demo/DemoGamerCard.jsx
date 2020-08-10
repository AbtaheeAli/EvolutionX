import React, { useState, useEffect } from 'react'
import DemoImage from '../../images/Demo Pic.jpg'

export function DemoGamercard() {
  return (
    <div className="gamer-card-container">
      <section className="gamer-card">
        <div className="gamer-card-header">
          <h4>Offline</h4>

          <h4> : Last seen 12h ago: Home</h4>
        </div>
        <div className="gamer-card-text">
          <h3>John Smith</h3>
          <h3>
            {' '}
            <img
              alt="gamerscore"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACF0lEQVRIic3Xu2sUURTH8U9MYjaIEDWYh88YxSKCiCBYWfgofIB/gHZiYeEfoYX4CEGEdCKipai9KBGMiNhIRBsfINF0KYxLEkFjcWeWybrZuRN30R+cYu7Mud87Z8459w7/SC0Fnu3EIRxAHzYm45P4iqd4jNlGLW4Qd1DGQo59x20M/A2whBHMRwCrbR7D6CgK7RZCVxRYbc/RGwvtxacGQFP7iJ48aClZZaOgqY3LCftIE6CpXVsKOmB5iVQk4QZTWGsGfAN76oUjURk3k+fvYwKbsSbHrxVdeJgd7BRqMG/V77AF63AaZ7Eb7RiN8J8R8qiiExFOc9iJfZiuuncpeaOXEfMcy4KvRjjcFVrsqxr3fuGkkEB581yBtgS8Qb4eYRf21rjXggcRc1RYKbgvwuEztleNlfEjc92G1Tnz9MOKCGA9ncPajB2J8FnIgqciHDYJ7S+rUSHRpnFK3KYwlQV/iXA4LNTs+8zYKqF+u/BayPo8TWYvjosrpx3Yb3E5/cTF5CVeRMxzNAuObSBvhJCnDeQMhoQavh7hX2kgaahnhfaXpyG8xYXk+ptQvxM4H+F/T4jcIm1NBpu5SWxbakXDTQRfrheKdow1AfpMRKn1CPXaKOgHrM+Dpupu0JuPizhvVatD2G2Wk3BzwjddWRSa1YBwSI+p8xncEg4LdVXkF6aEg8IvTL8/f2HG8ESNOv2v9BvNTaDnqkETWAAAAABJRU5ErkJggg=="
            />{' '}
            39372
          </h3>
        </div>
        <div className="gamer-card-gamertag">
          <h2 className="gamercard-gamertag"></h2>
        </div>
        <div className="gamer-card-img-container">
          <img
            className="gamer-card-img"
            src={DemoImage}
            width="280rem"
            height="280rem"
            alt="profile"
          />
        </div>
        <div className="gamer-card-friends-followers">
          <div>
            <h4>Friends</h4>
            <h4># 125 </h4>
          </div>
          <div>
            <h4>Followers</h4>
            <h4># 138 </h4>
          </div>
        </div>
        <div className="gamer-card-footer">
          <h4>Location: Florida </h4>
          <h4>Bio: Game Over Man! Game Over! </h4>
        </div>
      </section>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import { format } from 'date-fns/'

const dateFormat = `MMMM do, yyyy`

function SingleXboxOneGame(props) {
  return (
    <section className="xbox-one-game-card">
      <article className="game-img-container">
        <img
          className="game-img"
          // src={props.GameImage}
          width="200rem"
          height="200rem"
          alt="gameImage"
        />
      </article>
      <article className="xbox-one-game-info">
        <div className="xbox-one-game-title">
          <h3>{/* <strong>{props.Title}</strong> */}</h3>
        </div>
        <div className="xbox-one-game-achievements">
          <p>
            <img
              alt="Gamerscore"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACYElEQVRYhc3YO08UURjG8Z8GNCqXRkALSSwMUqixxMaoaGFh7P0KEhIVsbJR4y2WfgZM/A62BLIo2kgsDJWIrCRABGIELM5M2J3sZWYYCE/yNmf2PPufc3nfc4Z9pAM5+/VgAGdxHO1YwQJmMI5fRQDWUweGUcImthrEZvS74Qi0MLViFItNAOrFIkYinx2pH19yQiRjGn15QQaxXBBIHEu4lgdkvWCQONZxKS1Iv+JHJBk/0dsM5BA+7zJIHFOaLOrRPQKJ40E9kA75tu8qZjGfo+9vdfLQcEajCdxAS4VHL57KtviHasFMZTB4L8z3CTzGO7yN4OByBqDJJEiP5ik+jlm04RzKNZ6/jDyfpPTbRFclzO0Mo3Iv6lNqYD6Aixk8b1XCPMrQsQ8XMvw+TTyEgxFM1TA10Aa+RW9dpLrZ3glHUnZaEd6kM9H+x/b0VeqNsL6a6WglzFpKmDbhQLaUaP8n7MZYc/iBZylhVtmeprSnshacwadEe6ewoOO4E7WnPVjNV8LMpOwEN4X6lQSKtYUPwkI/nNKz6v+7pc8z33EM54V0nnz+PPJ8ldJvQzhHV6le3qgVY8KUnRQy8Bhe40rkNYi/Kb0mag1V1to0juuqa9NpvMgAsoW7tWDyVu01oUTUKg3NoqzBIh/JYbiTuF8PhFCJp/cIpCTF9aVPSGq7CTKHU81AYl21e7eDNRluB7EGojcoEmRBOHjlUi8+FgRSkmFq6qlVOMXXyrZpoizsmh3ftSvVLhyeJzUvHRtCZh2Srmoj//eZLtvfZ7qEhLksrImvQnYu5/TeH/oPnTeCnK+/ZZ0AAAAASUVORK5CYII="
            />{' '}
            {/* {props.CurrentGamerscore} / {props.MaxGamerscore} */}
          </p>
          <p>
            <img
              alt="achievement"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABV0lEQVRIie2WMUsDMRiGn4oKFl30f+jmL5CC1lFXnfQH6NCOuuumq/6O4tipVSgt6KCb1blQdShYz+G+o+FILjHXlIJ9IeSSfPc+X3LJEZhpClQHopylbjKfC5g4Ateq4Puio4z+oWdsVBpcBprAF9Aag39LvJrAjilol/ybyVa08HsZrADLwPkYQGfiVZV2Qwf+lMFVaReAWg5ojdHmWpO+jwSmfuMnqStSR8CtLkNH3TA6FYnnoy6wBAwl+AooAitAn7/Ptk+8xEXgWvq+gS1TlofAQAKfgT3g0gN8AewDL9IeAAeWFWID6Cgm7x7gN+W5DazboIkWgOOUgQ/8CJh3hapaJF6yO+DHEfggSS/5AHXaBHoZwJ7EBFGJeHemoUPi321QnWrAJ6Gh/0tlso9XF9gOAe5mQJPy6mpmu/qoiuwh7p6uVx/jbdE3NsSdy3VlZpqMfgFNF+IXu7VTyQAAAABJRU5ErkJggg=="
            />{' '}
            {/* {props.EarnedAchievements} */}
          </p>
        </div>

        <p className="xbox-one-game-lastPlayed">
          {/* Last Played: {format(new Date(props.LastPlayed), dateFormat)} */}
        </p>
      </article>
    </section>
  )
}

export function DemoXboxOneGames() {
  const [games, setGames] = useState([])

  const [filterText, setFilterText] = useState('')

  return (
    <section className="games-page">
      <div className="search-bar">
        <form className=" form-inline my-2 my-lg-0">
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                role="img"
                aria-label="magnifying glass"
                className="input-group-text"
                id="basic-addon1"
              >
                &#x1F50D;
              </span>
            </div>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search For Game"
              aria-label="Search"
              onChange={event => setFilterText(event.target.value)}
            />
          </div>
        </form>
      </div>

      <section className="xbox-one-games-card">
        {/* {games
          .filter(game => game.name.includes(filterText))
          .map(game => (
            <SingleXboxOneGame
              key={game.titleId}
              Title={game.name}
              GameImage={game.displayImage}
              CurrentGamerscore={game.achievement.currentGamerscore}
              MaxGamerscore={game.achievement.totalGamerscore}
              LastPlayed={game.titleHistory.lastTimePlayed}
              EarnedAchievements={game.achievement.currentAchievements}
            />
          ))} */}
      </section>
    </section>
  )
}

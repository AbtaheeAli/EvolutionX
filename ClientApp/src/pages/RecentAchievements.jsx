import React, { useState, useEffect } from 'react'
import format from 'date-fns/format'
import { getUser } from '../auth'

const dateFormat = `MMMM do, yyyy`

function SingleRecentAchievement(props) {
  return (
    <section className="achievement-card">
      <article className="achievement-title">
        <div>
          <img
            className="user-image"
            src={props.UserImg}
            width="65rem"
            height="65rem"
            alt="GHLogo"
          />
        </div>
        <div className="achievement-text">
          <div>
            <strong className="achievement-gamertag">{props.GamerTag}</strong>
            <p>{props.ShortDescription}</p>
          </div>
          <div className="achievement-date">
            {format(new Date(props.Date), dateFormat)}
          </div>
        </div>
      </article>
      <article className="achievement-image-container">
        <strong className="achievement-gamerscore">
          <img
            alt="gamerscore"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACvElEQVRYhc2YOU9VQRiGnzGgooBRWbRwK4xYqFErbIh7YmHsbbTXELfY2RiDSyz9DZhY21pKIBdcGo2FsXIFEiAKGuGxOOfK8XDhzrlcEt/kFmdmvvc8Z2buNwv8Rwq1BKmdQDfQBbQBLcAU8A14CwyEEL7WC7ISQKvaq5bUOZfWXNquV22pJ0SjelMdrwKwmMbVG2rjckH2qq9rhMjrpbqnVpAT6mSdQMqaUI/XAjJTZ5CyZtQjsSB7rX+P5PVZ3V4NZLX6aoVByho2N6lX5XiuAPuLDOkydAjozRb8TXpqK/AB2FjQdBr4CjQBHQVjx4GdIYQp+LdnLhYEGQJOA60hhJ0hhE5gB3AH+BnpsQm4sKA0HcNYPTFJhlvUW+pj9ZF6KvXqMf7fOJQH6bR6ii/rg9qs7lNHK9TfSz1vR/rNqe1ZmHORgapX05jSEubd6sECnmdhfs50xU4U4Kl6ADi8SH0AngMjBTy7sjDtSzTMahZ4Bxws8KIYdQA0pA9NkUFTIQTVDbny78DVCu0fAs0RvuuyMNORMM1qACZy5b+B4czzpxDCR/VOJMwPmB+m2F1ZA7AbeJEr3wCUMr/zaXnsxupLFuZtZBDAmRDCqwpAZQk8M9m7rIn0nH+/2mF8nnmvrlf3q2MV6vtSz/uRfrNq27+fs3jeqKR+tUHdapKB+9UH6tHU64T6K9JrcGHfJpvnIhpQT6oNGY9d6t0CIKqXyvH1WLVnSCZgM7C5YOwYsGvBqh1CmAT6CpoBrCVZrYuCAPSVQRbIZCV+WXC4alXJascXdY/JLn4l9UndFtV36jFX7nQwbezpIAPUnX5BPfVN7SkEkgHaro7UCaRk7NAsAdSoXrdyto3RqHrN5Z61c1At6mV1yOpLx6w6mLaPWbWB2u9n2pm/n2kHWoFJkvuZNyT3M6O1eP83+gMJZOrdi4YA4AAAAABJRU5ErkJggg=="
          />{' '}
          {props.GamerScore}
        </strong>
        <img
          className="achievement-image"
          src={props.AchievementIcon}
          alt="achievementIcon"
        />
      </article>
      <article className="achievement-footer">
        <div>
          {props.AchievementName} - {props.AchievementDescriptionOfActivity}
        </div>
        <div>
          <strong>{props.AchievementContentTitle}</strong>
        </div>
      </article>
    </section>
  )
}

export function RecentAchievements() {
  const [achievements, setAchievements] = useState([])

  const user = getUser()

  const [filterText, setFilterText] = useState('')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    function loadAchievements() {
      const url = `https://xapi.us/v2/${user.xboxProfileUserId}/activity`

      fetch(url, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'X-AUTH': user.apiKey,
        },
      })
        .then(response => response.json())
        .then(apiData => {
          setAchievements(apiData.activityItems)
          setLoading(true)
        })
    }
    loadAchievements()
  }, [user.apiKey, user.xboxProfileUserId])

  return (
    <section className="achievements-page">
      {loading === true && (
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
                placeholder="Search By Game"
                aria-label="Search"
                onChange={event => setFilterText(event.target.value)}
              />
            </div>
          </form>
        </div>
      )}
      {loading === false && (
        <div className="spinner mt-5 pt-5 d-flex justify-content-center align-items-center">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <section className="achievement-cards">
        {achievements
          .filter(activity => activity.activityItemType === 'Achievement')
          .filter(achievement => achievement.contentTitle.includes(filterText))
          .map(achievement => (
            <SingleRecentAchievement
              key={achievement.achievementId}
              GamerTag={achievement.gamertag}
              ShortDescription={achievement.shortDescription}
              AchievementIcon={achievement.achievementIcon}
              AchievementName={achievement.achievementName}
              AchievementDescriptionOfActivity={
                achievement.achievementDescription
              }
              AchievementContentTitle={achievement.contentTitle}
              UserImg={achievement.userImageUri}
              GamerScore={achievement.gamerscore}
              Date={achievement.date}
            />
          ))}
      </section>
    </section>
  )
}

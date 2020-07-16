import React, { useState, useEffect } from 'react'

function SingleRecentAchievement(props) {
  return (
    <section className="achievement">
      <article className="achievement-title">
        <div>
          <img
            className="user-image"
            src={props.UserImg}
            width="75rem"
            height="75rem"
            alt="GHLogo"
          />
        </div>
        <div className="achievement-text">
          <div>
            <strong>{props.GamerTag}</strong>
            <p>{props.ShortDescription}</p>
          </div>
          <div className="achievement-date">{props.Date}</div>
        </div>
      </article>
      <article className="achievement-image-container">
        <strong className="achievement-gamerscore">G {props.GamerScore}</strong>
        <img
          className="achievement-image"
          src={props.AchievementIcon}
          alt="GHLogo"
        />
      </article>
      <article className="achievement-footer">
        <div>
          {props.AchievementName} - {props.AchievementDescriptionOfActivity}
        </div>
        <div>{props.AchievementContentTitle}</div>
      </article>
    </section>
  )
}

export function RecentAchievements() {
  const [achievements, setAchievements] = useState([])

  function loadAchievements() {
    const url = `https://xapi.us/v2/2533274825461278/activity`

    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'X-AUTH': '1043a66f8177cfafd16c780666f7ebb48d2b4a78',
      },
    })
      .then(response => response.json())
      .then(apiData => {
        setAchievements(apiData.activityItems)
      })
  }

  useEffect(() => {
    loadAchievements()
  }, [])

  return (
    <section>
      {achievements.map(achievement => (
        <SingleRecentAchievement
          Key={achievement.achievementId}
          GamerTag={achievement.gamertag}
          ShortDescription={achievement.shortDescription}
          AchievementIcon={achievement.achievementIcon}
          AchievementName={achievement.achievementName}
          AchievementDescriptionOfActivity={achievement.achievementDescription}
          AchievementContentTitle={achievement.contentTitle}
          UserImg={achievement.userImageUri}
          GamerScore={achievement.gamerscore}
          Date={achievement.date}
        />
      ))}
    </section>
  )
}

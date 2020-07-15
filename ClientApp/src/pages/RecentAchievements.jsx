import React from 'react'
import RecentAchievementsData from '../RecentAchievements.json'

export function SingleRecentAchievement(props) {
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
  return (
    <section>
      {RecentAchievementsData.activityItems.map(achievement => (
        <SingleRecentAchievement
          key={achievement.achievementId}
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

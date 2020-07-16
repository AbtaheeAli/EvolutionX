import React from 'react'
import FriendsData from '../Friends.json'

export function SingleFriend(props) {
  return (
    <section className="friend-card">
      <article className="friend-card-img">
        <img
          className="friendAvatar"
          src={props.GameDisplayPicRaw}
          width="120rem"
          height="120rem"
          alt="friend-image"
        />
      </article>
      <article className="friend-list">
        <h4 className="friend-gt">
          <strong>{props.Gamertag}</strong>
        </h4>
        <h4>Gamerscore: {props.Gamerscore}</h4>
        <h4>TenureLevel: {props.TenureLevel}</h4>
      </article>
    </section>
  )
}

export function Friends() {
  return (
    <div className="friend-cards">
      {FriendsData.map(friend => (
        <SingleFriend
          key={friend.id}
          Gamertag={friend.Gamertag}
          XboxOneRep={friend.XboxOneRep}
          Gamerscore={friend.Gamerscore}
          TenureLevel={friend.TenureLevel}
          GameDisplayPicRaw={friend.GameDisplayPicRaw}
        />
      ))}
    </div>
  )
}

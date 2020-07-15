import React from 'react'
import FriendsData from '../Friends.json'

export function SingleFriend(props) {
  return (
    <section className="friend-card">
      <article className="friend-card-img">
        <a href="#">
          <img
            className="friendAvatar"
            src={props.GameDisplayPicRaw}
            width="120rem"
            height="120rem"
            alt="GHLogo"
          />
        </a>
      </article>
      <article className="friend-card-text">
        <div>
          <h4 className="friendList">Gamertag: {props.Gamertag}</h4>
          <h4 className="friendList">Reputation: {props.XboxOneRep}</h4>
          <h4 className="friendList">Gamerscore: {props.Gamerscore}</h4>
          <h4 className="friendList">TenureLevel: {props.TenureLevel}</h4>
        </div>
      </article>
    </section>
  )
}

export function Friends() {
  return (
    <div>
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

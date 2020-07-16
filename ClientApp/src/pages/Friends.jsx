import React, { useState, useEffect } from 'react'
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
  const [friends, setFriends] = useState([])

  function loadFriends() {
    const url = `https://xapi.us/v2/2533274825461278/friends`

    fetch(url, {
      method: 'GET',
      headers: {
        'X-AUTH': '1043a66f8177cfafd16c780666f7ebb48d2b4a78',
      },
    })
      .then(response => response.json())
      .then(apiData => {
        setFriends(apiData)
        console.log(apiData)
      })
  }

  useEffect(() => {
    loadFriends()
  }, [])

  return (
    <div className="friend-cards">
      {friends.map(friend => (
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

import React, { useState, useEffect } from 'react'
import FriendsData from '../Friends.json'

export function SingleFriend(props) {
  return (
    <section className="friend-card">
      <h4 className="friend-gt">
        <strong>{props.Gamertag}</strong>
      </h4>
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
        <h4>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADYUlEQVRIic2XXWhcRRTHf2d23U27O7uJCNoaobUVP+qbsW0SNZRWxYJQU8QnFXws2FdFsIRCqQhiH7S++5wmT/oibYzQLBVBSlGCaOtHmtpScHcnF81m7xwfsjdu13bnpq7oH+7DPTPn/Gbmzpk5F/4jSdqOc7BBrN0HjKnqJkQGAVBdQGQRmMW50yPwe0/AZ8vlbcb7CVUdR2RjoHsEnMoYM7GrVrt0W+AZ6MsXi8cROQTkQgPsUEPhg5pzb+2H5dTgr6y9qwGngKfWCexUJev9+M4o+jUI/rJQuKdpTAXY8g+hiS4Z74d3R9HVdqNpf5mBvqYxUz2EAmz1xkx9CvlbgvPF4nFguIfQRCMD1h5rN6wt9blyeWvs/Tzr30hp1VBjHhmt1X4AyCZW7/3RlNBIRT4GKoAC20X1ZeD+gF9OvD8CvAqtpZ6DDQovpIDOayazI6v6NoCobvRxPJ1z7iEV+SiF//gM9EFrxmLtPoVCwGnZwwHj/d0xfC2qAwAZY2hY+87lev31QWuHgMe7xCjmSqW91OufGABNka+qOjnq3HeongQGOprfGLT2eYEvQnFEdQySb6x6L9L99DQin1UKhUeBx24WD5jWEDVhrYFFNoX6x6o/G2O2d5gjoNH2ngVs10Aim6Ejj9ctkUMjzt2ZPF7kmaDLaiasLfWV4FIbc18cx+czpm2sqifnrD0BoCKHxftfQnFU9QokMxa5HByp6tNPRNEF4Ps2c4HVjdYvcXwekQdDcVRk4S8wzAYd4MVzpdI2hVeA39qavIgcG46ib4DXUoBnIVlq505jbUT3XM571ek7ms3nNJt9oCmy36jmY9XKonPzFIvvA7sC3KWVev0MtGbcKlemQqMFdjSz2W+9yNHV4Ws9AwcGrb2gIodDzgqTe+APaLskKv39WzSO5+m4vnqoRmzMw0/WahehLZ2Gq9UfFT78l6AonEigN4AB8s69SYqNdhs6W3PuSLvhBvAQrBjvXwK6Vojr1EVVHe8s+v52cu2Ooqs52ElvZj5nvB8ZXVq61tlw0yNzyLnrVeeeFXiPW5SnAS0rvFt2bk9nkZcoWNC3SqIJ4CDhO3tJYZJMZmK0Wv2pW8fUvzAz0JcrlfaK6piqbpbWL4yqLojIohf5fKVeP5Pk6f9WfwIdOkqVO/LVMgAAAABJRU5ErkJggg==" />
          {props.Gamerscore}
        </h4>
        <h4>
          <span className="tenure"> Tenure: </span> {props.TenureLevel}
        </h4>
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

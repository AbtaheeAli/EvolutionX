import React, { useState, useEffect } from 'react'
import { getUser } from '../auth'

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
          alt="friend"
        />
      </article>
      <article className="friend-list">
        <h4>
          <img
            alt="Gamerscore"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABmJLR0QA/wD/AP+gvaeTAAAB40lEQVRIib3WPY+MURTA8Z+XFRt2JEswg0SlVElEFDohGoWXD6CTTfZLEKKRqHaMl1az1ZJYCpXKB1Agm0VW0DBjZEkYxX2e7LXmmXtnTfYkp3jOc+7533vuOfde1lk2ZPrVcBoncQCNwr6Ed5jHY7T/d0L7cAc/0EvoMm5HkxlaptHNAK3WLqaGAW0pVjUsaLW2MJYDbI4AVur9FGx6hLBSK9PbsLY9S+l37C8hmyLgTRxNpQAdPMcbYY92JPzHsB0PY2NNuvR/4yrGsVPIyEacxefE2GVMxMCLiQE93MA2zBbwHl7hCI5Htio9HwPvJpzbxQyv9/m3gF14kYjRioFPEs5zhd+XjExU6TxsLgLVDZYF7PF3gXTxM/oex9YBMRqETSf/EI/lEiYjvZXw78XApYTzQXzC18j2wEq6DgkrHCQfYuDbhPMJoUKbff4t4jUOJ2Isxh8XpDf9mtDAs/hV2F4KbXFMui3OxcCa0Jypxr8ipG4Su4uxZ/AxMfafxidcnjnl3cYzPBKqN2fMTL8c1/EtM8Aw2sHefkDCVTJq4OUqWCmjvIDvpWCE66Q1AlhT5hOjlClr29OOjDRWSb2YaaplytKfMaBAyD9DJ3DKykO4fDK8F06pp8JDuJO9lPWSP/40hhcZSgYiAAAAAElFTkSuQmCC"
          />{' '}
          {props.Gamerscore}
        </h4>
      </article>
    </section>
  )
}

export function Friends() {
  const [friends, setFriends] = useState([])

  const user = getUser()

  const [loading, setLoading] = useState(false)

  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    function loadFriends() {
      const url = `https://xapi.us/v2/${user.xboxProfileUserId}/friends`

      fetch(url, {
        method: 'GET',
        headers: {
          'X-AUTH': user.apiKey,
        },
      })
        .then(response => response.json())
        .then(apiData => {
          setFriends(apiData)
          setLoading(true)
        })
    }
    loadFriends()
  }, [user.apiKey, user.xboxProfileUserId])

  return (
    <section className="friend-page">
      {loading === true && (
        <div className="search-bar">
          <form className="form-inline my-2 my-lg-0">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  &#x1F50D;
                </span>
              </div>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search For Friend"
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
      <div className="friend-cards">
        {friends
          .filter(friend => friend.Gamertag.includes(filterText))
          .map(friend => (
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
    </section>
  )
}

import React, { useState, useEffect } from 'react'

function SingleMessage(props) {
  return (
    <section className="message-card">
      <article className="message-img">
        <a href="#">
          <img
            className="friendAvatar"
            src="https://i.pcmag.com/imagery/articles/03q56RTgHk4cQvs07pQt4I9-1.fit_scale.size_2698x1517.v1569490700.jpg"
            width="120rem"
            height="120rem"
            alt="GHLogo"
          />
        </a>
      </article>
      <article className="message-text">
        <div className="sender message-item-text">
          <strong>Sender: {props.Sender}</strong>
        </div>
        <div className=" date message-item-text k">
          <strong>Sent: {props.Sent}</strong>
        </div>
        <div className="message-body-text">
          <p>{props.Summary}</p>
        </div>
      </article>
    </section>
  )
}

export function Messages() {
  const [messages, setMessages] = useState([])

  function loadMessages() {
    const url = `https://xapi.us/v2/messages`

    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'X-AUTH': '1043a66f8177cfafd16c780666f7ebb48d2b4a78',
      },
    })
      .then(response => response.json())
      .then(apiData => {
        setMessages(apiData)
      })
  }

  useEffect(() => {
    loadMessages()
  }, [])

  return (
    <div>
      {messages.map(message => (
        <SingleMessage
          key={message.header.id}
          Sender={message.header.sender}
          Sent={message.header.sent}
          Summary={message.messageSummary}
        />
      ))}
    </div>
  )
}

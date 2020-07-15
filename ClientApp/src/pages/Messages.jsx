import React, { useState, useEffect } from 'react'
import MessageInbox from '../MessageInbox.json'

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

  useEffect(() => {
    setMessages(MessageInbox)
  }, [])

  return (
    <div>
      <p>{messages.length}</p>
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

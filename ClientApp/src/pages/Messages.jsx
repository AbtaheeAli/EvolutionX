import React, { useState, useEffect } from 'react'
import format from 'date-fns/format'
import { getUser } from '../auth'

const dateFormat = `MMMM do, yyyy`

function SingleMessage(props) {
  return (
    <section className="message-card">
      <article className="message-header">
        <strong>
          From: <span className="message-sender">{props.Sender}</span>
        </strong>
        <strong className="message-date">
          {format(new Date(props.Sent), dateFormat)}
        </strong>
      </article>
      <div className="message-body-text">
        <p>{props.Summary}</p>
      </div>
    </section>
  )
}

export function Messages() {
  const [messages, setMessages] = useState([])

  const user = getUser()

  function loadMessages() {
    const url = `https://xapi.us/v2/messages`

    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'X-AUTH': user.apiKey,
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
    <div className="message-cards">
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

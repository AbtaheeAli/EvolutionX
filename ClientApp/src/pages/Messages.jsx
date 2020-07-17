import React, { useState, useEffect } from 'react'
import format from 'date-fns/format'

const dateFormat = `MMMM do, yyyy`

function SingleMessage(props) {
  return (
    <section className="message-card">
      <article className="message-img"></article>
      <article className="message-text">
        <strong>From: {props.Sender}</strong>
        <strong>{format(new Date(props.Sent), dateFormat)}</strong>
      </article>
      <div className="message-body-text">
        <p>{props.Summary}</p>
      </div>
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

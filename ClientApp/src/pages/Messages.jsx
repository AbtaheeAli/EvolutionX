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

  const [filterText, setFilterText] = useState('')

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
    <section className="messages-page">
      <div className="search-bar">
        <form className=" form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={event => setFilterText(event.target.value)}
          />
        </form>
      </div>
      <div className="message-cards">
        {messages
          .filter(sender => sender.header.sender.includes(filterText))
          .map(message => (
            <SingleMessage
              key={message.header.id}
              Sender={message.header.sender}
              Sent={message.header.sent}
              Summary={message.messageSummary}
            />
          ))}
      </div>
    </section>
  )
}

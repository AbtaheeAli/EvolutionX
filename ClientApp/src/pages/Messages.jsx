import React, { useState, useEffect } from 'react'
import format from 'date-fns/format'

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

export function Messages(props) {
  const [messages, setMessages] = useState([])

  const [filterText, setFilterText] = useState('')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    function loadMessages() {
      setLoading(false)
      const url = `https://xapi.us/v2/messages`

      fetch(url, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'X-AUTH': props.chosenAccount.apiKey,
        },
      })
        .then(response => response.json())
        .then(apiData => {
          setMessages(apiData)
          setLoading(true)
        })
    }
    loadMessages()
  }, [props.chosenAccount.xboxProfileUserId, props.chosenAccount.apiKey])

  return (
    <section className="messages-page">
      {loading === true && (
        <div className="search-bar">
          <form className=" form-inline my-2 my-lg-0">
            <div className="input-group">
              <div className="input-group-prepend">
                <span
                  role="img"
                  aria-label="magnifying glass"
                  className="input-group-text"
                  id="basic-addon1"
                >
                  &#x1F50D;
                </span>
              </div>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search For Sender"
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
      {loading === true && (
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
      )}
    </section>
  )
}

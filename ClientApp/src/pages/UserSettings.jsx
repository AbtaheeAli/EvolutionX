import React, { useState, useEffect } from 'react'
import { getUser } from '../auth'

export function UserSettings() {
  const user = getUser()

  return (
    <section className="account-settings-container">
      <h3>{user.userName}</h3>
      <ul>
        <li>Email: {user.email}</li>
        <li>X API Key: {user.apiKey}</li>
        <li>Xbox Profile User ID: {user.xboxProfileUserId}</li>
      </ul>
    </section>
  )
}

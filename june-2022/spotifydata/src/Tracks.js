import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js'
import axios from 'axios'

export const Tracks = () => {
  const [token, setToken] = useState('')

  useEffect(() => {
    const [token, setToken] = useState('')

    useEffect(() => {
      axios('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-xxx-form-urlencoded',
          Authorization: 'Basic ' + (client id + ':' + client secret)
        },
      })
    })
  })
  return <div>Tracks</div>
}

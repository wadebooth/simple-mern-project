import logo from './logo.svg'
import './App.css'
import { clientId } from './secrets'
import { useEffect, useState } from 'react'

function App() {
  const REDIRECT_URI = 'http://localhost:3000'
  const AUTH_ENDPOINT = 'http://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'

  const [token, setToken] = useState('')

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Spotify React</h1>
        <a
          href={`${AUTH_ENDPOINT}?client_id=${clientId}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      </header>
    </div>
  )
}

export default App

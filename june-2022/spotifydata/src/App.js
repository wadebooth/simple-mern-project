import logo from './logo.svg'
import './App.css'
import { Tracks } from './Tracks'
import { clientId } from './secrets'

function App() {
  const REDIRECT_URI = 'http://localhost:3000'
  const AUTH_ENDPOINT = 'http://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Spotify React</h1>
        <a href=''>Login to Spotify</a>
      </header>
    </div>
  )
}

export default App

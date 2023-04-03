import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="inputWrapper">
      <h1>URL Shortener</h1>
      <div>
        <input type="text" placeholder='Paste a link to shorten it' />
        <button>Shorten</button>
      </div>
    </div>
  )
}

export default App

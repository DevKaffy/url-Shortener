import React from 'react'
import './InputShortener.css'

const InputShortener = () => {
  return (
    <div className="input-wrapper">
      <h1>URL Shortener</h1>
      <div className="input-container">
        <input type="text" placeholder="Paste a link to shorten it" />
        <div className="button">
          <button>shorten</button>
        </div>
      </div>
    </div>
  );
}

export default InputShortener
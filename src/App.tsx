import BackgroundAnimate from './Components/BackgroundAnimate'
import InputShortener from './Components/InputShortener'
import LinkResult from './Components/LinkResult'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState("")
    const [error, setError] = useState(false);

  return (
    <div className="wrapper">
      <InputShortener  setInputValue = {setInputValue} handleFetchError={() => {
        error && setError(false)
      }} />
      <BackgroundAnimate />
      <LinkResult inputValue = {inputValue} error={error} setError={setError} />
    </div>
  );
}

export default App

import BackgroundAnimate from './Components/BackgroundAnimate'
import InputShortener from './Components/InputShortener'
import LinkResult from './Components/LinkResult'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="wrapper">
      <InputShortener setInputValue = {setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue = {inputValue} />
    </div>
  );
}

export default App

import BackgroundAnimate from './Components/BackgroundAnimate'
import InputShortener from './Components/InputShortener'
import LinkResult from './Components/LinkResult'
import './App.css'

const App = () => {
  return (
    <div className="wrapper">
      <InputShortener />
      <BackgroundAnimate />
      <LinkResult />
    </div>
  );
}

export default App

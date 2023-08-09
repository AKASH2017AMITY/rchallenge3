import { useState } from 'react';
import './App.css';
import StartPage from './Components/StartPage/StartPage';
import GamePlay from './Components/GamePlay/GamePlay';

function App() {

  const [isgameStart, setIsGameStart] = useState(false);

  function game() {
    setIsGameStart((prev) => !prev)
  }
  return (
    <>
      {isgameStart ? <GamePlay /> : <StartPage handleClick={game}/>}
    </>
  );
}

export default App;

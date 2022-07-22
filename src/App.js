import React from 'react';
import './App.css';
import StartQuiz from './components/StartQuiz';
import Questions from './components/Questions';

function App() {

  const [startGame, setStartGame] = React.useState(false)

  const handleStartGame = () => {
    console.log(startGame)

    setStartGame(prevState => !prevState)
    console.log(startGame)
  }

  return (
    <div className="App">
      {startGame
        ? <Questions />
        : <StartQuiz handleStartGame={handleStartGame} />}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import StartQuiz from './components/StartQuiz';
import Questions from './components/Questions';

function App() {

  const [startGame, setStartGame] = React.useState(false)
  const [isSelected, setIsSelected] = React.useState(false)

  const handleStartGame = () => setStartGame(prevState => !prevState)

  const selectAnswer = (event, selected) => {
    console.log(event.target, selected)

    setIsSelected(prevSelected => !prevSelected)
  }



  return (
    <div className="App">
      {startGame
        ? <Questions selectAnswer={selectAnswer} isSelected={isSelected} />
        : <StartQuiz handleStartGame={handleStartGame} />
      }
    </div>
  );
}

export default App;

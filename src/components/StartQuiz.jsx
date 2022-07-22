import React from 'react'

export default function StartQuiz(props) {
  return (
    <div className="start-quiz">
      <h1>Quizzical</h1>
      <h2>Some description if needed</h2>
      <button onClick={props.handleStartGame}>Start Quiz</button>
    </div>
  )
}

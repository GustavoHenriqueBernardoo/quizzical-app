import React from 'react'

export default function Questions(props) {
  return (
    <div>
      <h1>How would one say goodbye in Spanish?</h1>
      <ul onClick={(event) => props.selectAnswer(event, props.isSelected)}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ul>
      <hr></hr>

      <button>Check Answers</button>
    </div>
  )
}

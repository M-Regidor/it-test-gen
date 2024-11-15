import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from './components/Question'
import questions from "./assets/question-details.json"

function App() {
  const [userInputs, setUserInputs] = useState(Array(questions.length).fill(null))
  
  const updateUserInput = (idx, value) => {
    const updatedItems = [...userInputs]
    updatedItems[idx] = value
    setUserInputs(updatedItems)
  }

  const gradeTest = () => {
    let score = 0
    for (let i = 0; i < userInputs.length; i++) {
      if (userInputs[i] === questions[i].answer){
        score++
      }
    }
    console.log("score", score, "of", questions.length)
  }

  console.log(userInputs)
  return (
    <>
      <div>
        <h1 id='title'>IT Practice Test</h1>
      </div>
      <div id="question-index">
        {questions.map((item, idx) =>
          <Question
            key={idx}
            questionDetails={item}
            updateUserInput={updateUserInput}
            idx={idx}
          />
        )}
      </div>
      <div>
        <button onClick={gradeTest}>Submit</button>
      </div>
    </>
  )
}

export default App

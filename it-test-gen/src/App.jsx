import { useState } from 'react'
import './App.css'
import Question from './components/Question'
import questions from "./assets/questions-2.json"

function App() {
  const [userInputs, setUserInputs] = useState(Array(questions.length).fill(null))
  const [testCompelete, setTestCompelete] = useState(false)
  
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
    setTestCompelete(true)
    console.log("score", score, "of", questions.length)
  }

  
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
            testCompelete={testCompelete}
            correct={item.answer === userInputs[idx] ? true : false}
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

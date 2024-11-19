import { useState } from 'react'
import './App.css'
import Question from './components/Question'
import questions2 from "./assets/questions-2.json"
import questions1 from "./assets/questions-1.json"
import questions3 from "./assets/questions-3.json"

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // Swap the elements
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

function App() {
  const allTest = [...questions1, ...questions2, ...questions3]
  const [questions, setQuestions] = useState(shuffleArray(allTest))
  const [score, setScore] = useState(null)
  const [userInputs, setUserInputs] = useState(Array(questions.length).fill(null))
  const [testComplete, setTestComplete] = useState(false)
  
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
    setTestComplete(true)
    setScore(score)
    console.log("score", score, "of", questions.length)
  }

  
  return (
    <>
      <div>
        <h1 id='title'>IT Practice Test</h1>
      </div>
      <div id='questions-container'>
        <div id="question-index">
          {questions.map((item, idx) =>
            <Question
              key={idx}
              questionDetails={item}
              updateUserInput={updateUserInput}
              idx={idx}
              testComplete={testComplete}
              correct={item.answer === userInputs[idx] ? true : false}
            />
          )}
        </div>
          <div id='results'>
              {score ? `${score} / ${questions.length}` : null}
          </div>
      </div>
      <div>
        <button onClick={gradeTest}>Submit</button>
      </div>
    </>
  )
}

export default App

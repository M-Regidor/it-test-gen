import { useEffect, useState } from 'react'
import './App.css'
import Question from './components/Question'
import terms from "./assets/questions-terms.json"
import networking from "./assets/questions-networking.json"
import troubleShooting from "./assets/questions-troubleshooting.json"

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

function App() {
  const allTest = [...terms, ...networking, ...troubleShooting]
  const [questions, setQuestions] = useState(terms)
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

  useEffect(() => {
    const newQuestions = questions
    setQuestions(shuffleArray(newQuestions))
  }, [questions])

  const handleChange = (value) => {
    // const value = e.target.value
    setQuestions(shuffleArray(value))
    setUserInputs(Array(value.length).fill(null))
    setTestComplete(false)
    setScore(null)
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
            <div id="test-types">
              <button onClick={() => handleChange(terms)}>Terms</button>
              <button onClick={() => handleChange(networking)}>Networking</button>
              <button onClick={() => handleChange(troubleShooting)}>Trouble Shooting</button>
              <button onClick={() => handleChange(allTest)}>All Test</button>
            </div>
              <h2 style={{fontSize: "20px", fontWeight: "bold"}}>
                {score !== null ? `${score} / ${questions.length}` : null}
              </h2>
          </div>
      </div>
      <div>
        <button onClick={gradeTest}>Submit</button>
      </div>
    </>
  )
}

export default App

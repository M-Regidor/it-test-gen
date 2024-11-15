import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from './components/Question'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 id='title'>IT Practice Test</h1>
      </div>
      <div id="question-index">
        <Question></Question>
      </div>
    </>
  )
}

export default App

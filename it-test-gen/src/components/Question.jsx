import { useEffect, useState } from "react"
import { shuffleArray } from "../App"

const Question = ({questionDetails, updateUserInput, idx, testComplete, correct}) => {
    const [selectedOption, setSelectedOption] = useState()
    let fontColor

    

    const handleOption = (option, optionIdx) => {
        setSelectedOption(optionIdx)
        updateUserInput(idx, option)
    }

    if (testComplete){
        fontColor = correct ? "green" : "red"
    } else {
        fontColor = "black"
    }

    useEffect(() => {
        setSelectedOption()
    }, [questionDetails])

    
    return (
        <div id="question-item">
            <h1 id="question-title" style={{color: fontColor}}>{idx + 1}. {questionDetails.question}</h1>
            {questionDetails.options.map((option, optionIdx) =>
                <label key={optionIdx}>
                    <input 
                        type="radio"
                        value={optionIdx}
                        checked={selectedOption === optionIdx}
                        onChange={() => handleOption(option, optionIdx)}
                    />
                    {option}
                </label>
            )}
        </div>

    )
}

export default Question
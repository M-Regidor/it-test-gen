import { useState } from "react"

const Question = ({questionDetails, updateUserInput, idx, testCompelete, correct}) => {
    const [selectedOption, setSelectedOption] = useState()
    let fontColor

    const handleOption = e => {
        const value = Number(e.target.value)
        setSelectedOption(value)
        updateUserInput(idx, value)
    }

    if (testCompelete){
        fontColor = correct ? "green" : "red"
    } else {
        fontColor = "black"
    }
    
    return (
        <div id="question-item">
            <h1 id="question-title" style={{color: fontColor}}>{idx + 1}. {questionDetails.question}</h1>
            {questionDetails.options.map((item, optionIdx) =>
                <label key={optionIdx}>
                    <input 
                        type="radio"
                        value={optionIdx}
                        checked={selectedOption === optionIdx}
                        onChange={handleOption}
                    />
                    {item}
                </label>
            )}
        </div>

    )
}

export default Question
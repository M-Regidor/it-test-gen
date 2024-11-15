import { useState } from "react"

const Question = ({questionDetails, updateUserInput, idx}) => {
    const [selectedOption, setSelectedOption] = useState()

    const handleOption = e => {
        const value = Number(e.target.value)
        setSelectedOption(value)
        updateUserInput(idx, value)
    }


    return (
        <div id="question-item">
            <h1 id="question-title">{idx + 1}. {questionDetails.question}</h1>
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
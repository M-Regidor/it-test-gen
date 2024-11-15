import { useState } from "react"

const Question = () => {
    const [selectedOption, setSelectedOption] = useState()

    const handleOption = e => {
        setSelectedOption(Number(e.target.value))
        console.log(e.target.value)
    }

    const questionDetails = {
        question: "Which command is used to check network connectivity?",
        opitions: ["ipconfig", "ping", "tracert", "nslookup"],
        anwser: 1
    }

    return (
        <>
            <h1>{questionDetails.question}</h1>
            {questionDetails.opitions.map((item, idx) =>
                <label>
                    <input 
                        type="radio"
                        value={idx}
                        checked={selectedOption === idx}
                        onChange={handleOption}
                    />
                    {item}
                </label>
            )}
        </>
    )
}

export default Question
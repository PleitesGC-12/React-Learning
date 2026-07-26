import { useState } from "react"

export const AddTask = ({addTask}) => {
    
    const [inputValue, setInputValue] = useState("")

    // if we change the value in the input, the event is sent
    // to the function onInputChange and then is set as a new value
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    // to prevent the reloading of the page
    const whenSubmit = (event) => {
        event.preventDefault()
        addTask(inputValue)
    }

    return (
        // in order to prevent sending the form we use the event onSubmit along with a function
        <form onSubmit={whenSubmit}>
            <input
                type="text"
                placeholder="Add a new Task"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )  
}
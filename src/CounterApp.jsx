import React from 'react'
import {useState} from 'react'


// Practicing useState
const CounterApp = ({value}) => {
    
    const [counter, setCounter] = useState(value)

    // function within the component
    const handleClick = () => {
        
        // to modify the counter we use setCounter
        setCounter(counter + 1)
    } 
        
    return (
        <div>
            <h1>Counter: </h1>
            
            {/* Calling the prop */}
            <p>{counter}</p>

            <button onClick={handleClick}>
                I'm a button
            </button>

        </div>
    )
}

export default CounterApp
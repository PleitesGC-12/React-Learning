import React from 'react'


// Practicing events
const CounterApp = ({value}) => {
    
    function handleClick() {
        value += 1
        console.log(value)
    }

    return (
        <div>
            <h1>Counter: </h1>
            
            {/* Calling the prop */}
            <p>{value}</p>

            <button onClick={handleClick}>
                I'm a button
            </button>

        </div>
    )
}

export default CounterApp
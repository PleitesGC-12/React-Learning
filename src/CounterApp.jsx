import React from "react";
import {useState} from "react";

const CounterApp = ({value}) => {

    const[counter, setCounter] = useState(value)
    
    const handleClick = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>Counter</h1>

            <p>{counter}</p>

            <button onClick={handleClick}>
                I'm a button
            </button>

        </div>
    )

}

export default CounterApp
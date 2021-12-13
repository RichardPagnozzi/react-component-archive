import React, { useState } from "react";


export const Tick = () => {

    const [count, setCount] = useState(0)

    const decrementCount = () => {
        setCount(count - 1)
    }
    const incrementCount = () => {
        setCount(count + 1)
    }
    const clearCount = () => {
        setCount(0)
    }

    return (
        <div>
            <div>
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
            </div>
            <button onClick={clearCount}>Clear</button>
        </div>
    )
}
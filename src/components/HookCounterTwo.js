import React from 'react'
import { useState } from 'react'
const HookCounterTwo = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const increamentfive = () => {
        for(let i = 0; i< 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
  return (
    <div>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() =>  setCount(prevCount => prevCount + 1)}>Increament</button>
        <button onClick={() =>  setCount(prevCount => prevCount - 1)}>Decreament</button>
        <button onClick={increamentfive}>increament 5</button>
    </div>
  )
}

export default HookCounterTwo
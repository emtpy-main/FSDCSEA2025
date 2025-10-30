import React from 'react'
import { useState } from 'react';

const StateHandling = () => {
    const [count, setCount] = useState(0);
    const handleClick = ()=>{
        setCount(count + 1);
    }
  return (
    <div>StateHandling
        <h2>Count: {count}</h2>
        <button onClick={handleClick}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>

  )
}

export default StateHandling
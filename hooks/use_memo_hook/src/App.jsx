import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'

function App() {
   /* 
   useMemo: This hook is used to memoize a computed value so that the calculation is not repeated on every render. It only recalculates the value when the dependencies (values in the dependency array) change.
   
   Memoization: The process of storing a calculated result and reusing it to prevent redundant calculations.

   Dependency Array: Like useEffect, useMemo accepts a dependency array. The callback inside useMemo is only re-executed when one of the values in the array changes.
   */

   const [count, setCount] = useState(0)
   const [text, setText] = useState('')

   /* 
   The expensive calculation is memoized, meaning it will only be recalculated when `count` changes. 
   If the `text` state changes, the expensive operation won't run unnecessarily, optimizing the performance.
   */

   const memoizeValue = useMemo(() => {
      console.log(`Performing expensive calculation ${Date.now()}...`)
      return count * 2
   }, [count])

   return (
    <>
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizeValue}</p>
      <input 
        type="text" 
        placeholder="Enter something..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <br /><br />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>    
    </>
   )
}

export default App

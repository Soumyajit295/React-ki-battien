import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /* useState is a hook that allows us to use state inside a functional components (state means a variable which changes over time) */

  const [count,setCount] = useState(0)
  /* Here we create a count state using useState(0) 
     
    count - is the state that changes overTime thart stores the current value of count
    setCount - is the function provided by the useState to change the count state no one can change the count state.
    useState(0) - means the initial value of the count is 0 means when our web page render for first time then our state(count) become initialize with value 0 
  
  */

  const increment = ()=>{
    setCount(prev => prev+1)
  }
  const decrement = ()=>{
    setCount(prev => prev !== 0 ? prev-1 : 0)
  }
  

  return (
    <>
      <h1>useState hook</h1>
      <p>Current count value is {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App

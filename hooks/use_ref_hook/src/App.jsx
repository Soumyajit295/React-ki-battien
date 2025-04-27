import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  /* `useRef` is a hook that returns an object with a `current` property. This property can hold a value that persists across renders, meaning the value does not get reset when the component re-renders. Updates to the value inside `useRef` do not trigger a re-render, which makes it useful for storing mutable values that you don’t want to cause UI updates when they change.
  
  Application of useRef

  1. Directly Access DOM element
  2. Storing values that don't require re-rendering : If you need to store values that should persist across renders (e.g., a timer ID or previous state), but don't need to trigger a re-render when they change, `useRef` is a good choice.
  
 */


  /* Example of how can we store the value of DOM element */

  const inputRef = useRef(null)
  const focusToInput = ()=>{
    inputRef.current.focus()
  }

  /* Example of how to stores data whcih persists across rerenders */

  const timeId = useRef(null)

  useEffect(()=>{
    timeId.current = setInterval(()=>{
      console.log(`Timer running ${Date.now()}...`)
    },1000) 
    return (()=>clearInterval(timeId.current))
  },[])

  const stopInterval = ()=>{
    clearInterval(timeId.current)
  }

  return(
    <>
      <h1>useRef hook</h1>
      <input type="text" placeholder='Enter your name' ref={inputRef}/>
      <br /><br />
      <button onClick={focusToInput}>Focus input</button>
      <br /><br />
      <button onClick={stopInterval}>Stop interval</button>
    </>
  )
}

export default App

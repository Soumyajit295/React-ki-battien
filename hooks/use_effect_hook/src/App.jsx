import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  /* useEffet hook allows us to perform side-effects in functional components
  
     Side effects means what
     Like on render of the component we have to make an api call.
     We have to start a time something like that.

     useEffect hook takes a callback function whcih performs the side-effects and a depandancy array.

     What is the use of dependancy array

     1. If the dependency array is empty then it performs the side wffects only on the first render of the component.

     2. If the dependancy array has some value than it performs the side effects also on the change in value which is passed to the dependency array.

     3. If we don't pass dependency array then it perform side effect on each and every render of the component which can degrade the performance of the app.

     What do you mean by cleanup function

     Cleanup function are those function whcih has to run to execute to stop those process which is start whenever the component render for the first time like timer ,event listener etc.

     What happened if you don't use cleanup function

     If we don't put cleanup function inside a useEffect then react cannot stop those process automatically means it keeps running in background whcih can degrade the app performance andcan lead to unexpected behaviour.
  
  */

  const [count,setCount] = useState(0)
  const [showCard,setShowCard] = useState(false)

  /* It's run only on app render for first time */

  useEffect(()=>{
    alert(`App render for first time`)
  },[])

  /* It run only if any changes in count */

  useEffect(()=>{
    alert(`App render again on count value change to ${count}`)
  },[count])

  /* It will run each and every render of the page */

  // useEffect(()=>{
  //   alert(`I give you an alert on every render`)
  // })


  /* Cleanup function */

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowCard(true)
    },5000)

    return(()=>{
      clearTimeout(timer)
    })
  },[])

  return (
    <>
      <h1>{count}</h1>    
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <br />
      <br />
      <button onClick={()=>setCount(count-1)}>Decrement</button>  

      {showCard && <Card onClose={()=>setShowCard(false)}/>}  
    </>  
  )
}

export default App

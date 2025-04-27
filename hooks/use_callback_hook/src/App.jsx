import { useState, useCallback } from 'react';
import './App.css';
import Child from './components/Child';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  /*
    useCallback Hook:

    In React, whenever a component re-renders, 
    all the functions inside it are recreated (new function instances).
    
    If we pass these recreated functions as props to child components,
    it can cause unnecessary re-renders of the child components — 
    even if the function logic remains the same.

    To avoid this, we use the 'useCallback' hook.
    'useCallback' memoizes the function and returns the same instance 
    until its dependencies change.
  */

  /*
    In the example below, we wrapped the increment function inside useCallback.
    In the dependency array, we pass 'count', which means the increment function
    will only be recreated when 'count' changes.

    If we don't use useCallback, then typing something inside the input box 
    would trigger a re-render of the parent component, which would recreate 
    a new instance of the increment function — causing the child component to 
    re-render unnecessarily.

    We use 'memo' in the Child component to ensure it only re-renders when the 
    'increment' function actually changes.
  */

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <Child increment={increment} />
      <br /><br />
      <input
        type="text"
        placeholder="Enter something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default App;

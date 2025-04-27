import React from 'react'
import { useEffect } from 'react'
import { memo } from 'react'

function Child({increment}) {
  console.log(`Child render ${Date.now()}..`)
  return(
    <button onClick={increment}>Increment count</button>
  )
}

export default Child
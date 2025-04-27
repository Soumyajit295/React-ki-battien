import React from 'react'

function Card({onClose}) {
  return (
    <div>
        Hey i am a card
        <br />
        <button onClick={onClose}>Close card</button>
    </div>
  )
}

export default Card
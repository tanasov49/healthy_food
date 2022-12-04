import React from 'react'

export default function ButtonHandle({image, onClick}) {
  return (
    <button className='button-handle' type='button' onClick={onClick}>
      <img className='button-handle__image' src={image} alt='button' />
    </button>
  )
}

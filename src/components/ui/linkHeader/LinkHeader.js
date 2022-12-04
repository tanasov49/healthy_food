import React from 'react'

export default function LinkHeader({classBlock}) {
    const textLink = 'Order Now'
  return (
    <button className={`link-header ${classBlock}`} type='button'>{textLink}</button>
  )
}

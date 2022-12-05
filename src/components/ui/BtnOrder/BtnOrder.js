import React from 'react'

export default function BtnOrder({classBlock, textBtn}) {
  return (
    <button className={`btn-order ${classBlock}`} type='button'>{textBtn}</button>
  )
}

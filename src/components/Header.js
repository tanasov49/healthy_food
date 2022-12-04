import React from 'react'
import Nav from './blocks/Nav'
import HeaderInfo from './blocks/HeaderInfo'
export default function Header() {
  return (
    <header className='header'>
      <Nav />
      <HeaderInfo />
    </header>
  )
}

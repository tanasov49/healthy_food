import React from 'react'
import Nav from './ui/Nav/Nav'
import HeaderInfo from './ui/HeaderInfo/HeaderInfo'
export default function Header() {
  return (
    <header className='header'>
      <Nav />
      <HeaderInfo />
    </header>
  )
}

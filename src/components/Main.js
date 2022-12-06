import React from 'react'
import SectionAbout from './blocks/SectionAbout'
import SectionChefs from './blocks/SectionChefs'
import SectionDishes from './blocks/SectionDishes'
import SectionWork from './blocks/SectionWork'

export default function Main() {
  return (
    <main className='main'>
      <SectionAbout />
      <SectionWork />
      <SectionDishes />
      <SectionChefs />
    </main>
  )
}

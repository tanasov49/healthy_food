import React from 'react'
import SectionAbout from './blocks/SectionAbout'
import SectionChefs from './blocks/SectionChefs'
import SectionDishes from './blocks/SectionDishes'
import SectionRecipes from './blocks/SectionRecipes'
import SectionWork from './blocks/SectionWork'
import SectionSocial from './blocks/SectionSocial'

export default function Main() {
  return (
    <main className='main'>
      <SectionAbout />
      <SectionWork />
      <SectionDishes />
      <SectionChefs />
      <SectionRecipes />
      <SectionSocial />
    </main>
  )
}

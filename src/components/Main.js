import React from 'react'
import SectionAbout from './main/SectionAbout'
import SectionChefs from './main/SectionChefs'
import SectionDishes from './main/SectionDishes'
import SectionRecipes from './main/SectionRecipes'
import SectionWork from './main/SectionWork'
import SectionSocial from './main/SectionSocial'

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

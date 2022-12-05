import React from 'react'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import ReadyMeals from '../ui/ReadyMeals/ReadyMeals'
export default function SectionDishes() {
    const classSectionTitle = 'section-title_dishes'
    const titleSection = {
        title: 'DISHES', subtitle: 'Dish Of The Day'
    }
  return (
    <section className='section-dishes'>
        <SectionTitle
        classTitle={classSectionTitle} 
        textSection={titleSection}
        />
        <ReadyMeals />
    </section>
  )
}

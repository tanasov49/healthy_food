import React from 'react'
import TitleSection from '../ui/TitleSection/TitleSection'
import ReadyMeals from '../ui/ReadyMeals/ReadyMeals'
export default function SectionDishes() {
    const classSectionTitle = 'section-title_dishes'
    const titleSection = {
        title: 'DISHES', subtitle: 'Dish Of The Day'
    }
    const classReadyMeals = 'ready-meals_section-dishes';
  return (
    <section className='section-dishes'>
        <TitleSection
        classTitle={classSectionTitle} 
        textSection={titleSection}
        />
        <ReadyMeals 
        classBlock={classReadyMeals}
        />
    </section>
  )
}

import React from 'react'
import ChefsImages from '../ui/ChefsImages/ChefsImages';
import SectionTitle from '../ui/SectionTitle/SectionTitle'
export default function SectionChefs() {
    const classSectionTitle = 'section-title_chefs';
    const titleSection ={title: 'CHEFS', subtitle: `This month's chefs`}
  return (
    <section className='section-chefs'>
        <SectionTitle
        classTitle={classSectionTitle} 
        textSection={titleSection}
        />
        <ChefsImages />
    </section>
  )
}
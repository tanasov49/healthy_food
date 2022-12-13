import React from 'react'
import TitleSection from '../ui/TitleSection/TitleSection'
import SliderImages from '../ui/SliderImages/SliderImages'
export default function SectionAbout() {
  const classSectionTitle = 'section-title_about'
  const titleSection = {
    title: 'About', subtitle: 'The Basics Of Healthy Food'
  }
  const textSectionAbout = 'In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.';
  const classSliderAbout = 'slider-images_about'
  return (
    <section className='section-about'>
        <TitleSection 
        classTitle={classSectionTitle}
        textSection={titleSection}
        />
        <p className='section-about__text'>{textSectionAbout}</p>
        <SliderImages 
        classBlock={classSliderAbout}
        />
    </section>
  )
}

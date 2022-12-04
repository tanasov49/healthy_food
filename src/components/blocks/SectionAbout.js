import React from 'react'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import SliderImages from '../ui/SliderImages/SliderImages'
export default function SectionAbout() {
  const classSectionAboutTitle = 'section-title_about'
  const titleSectionAbout = {
    title: 'About', subtitle: 'The Basics Of Healthy Food'
  }
  const textSectionAbout = 'In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.';
  const classSliderAbout = 'slider-images_about'
  return (
    <section className='section-about'>
        <SectionTitle 
        classTitle={classSectionAboutTitle}
        textSection={titleSectionAbout}
        />
        <p className='section-about__text'>{textSectionAbout}</p>
        <SliderImages 
        classBlock={classSliderAbout}
        />
    </section>
  )
}

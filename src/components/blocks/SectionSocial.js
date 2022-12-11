import React from 'react';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import Socials from '../ui/Socials/Socials';
export default function SectionSocial() {

  const classSectionTitle = 'section-title_recipes';
  const titleSection = {title: 'SOCIAL', subtitle: `We in Social`};
  const classSocial = 'social_section-social'
  return (
    <section className='section-social'>
      <SectionTitle 
        classTitle={classSectionTitle}
        textSection={titleSection}
      />
      <Socials 
        classBlock={classSocial}
      />
    </section>
  )
}

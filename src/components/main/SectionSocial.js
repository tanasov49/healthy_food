import React from 'react';
import TitleSection from '../ui/TitleSection/TitleSection';
import Socials from '../ui/Socials/Socials';
export default function SectionSocial() {

  const classSectionTitle = 'section-title_recipes';
  const titleSection = {title: 'SOCIAL', subtitle: `We in Social`};
  const classSocial = 'socials_section-social'
  return (
    <section className='section-socials'>
      <TitleSection 
        classTitle={classSectionTitle}
        textSection={titleSection}
      />
      <Socials 
        classBlock={classSocial}
      />
    </section>
  )
}

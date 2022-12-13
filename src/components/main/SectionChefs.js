import React from 'react'
import ChefsImages from '../ui/ChefsImages/ChefsImages';
import TitleSection from '../ui/TitleSection/TitleSection'
export default function SectionChefs() {
    const classSectionTitle = 'section-title_chefs';
    const titleSection ={title: 'CHEFS', subtitle: `This month's chefs`};
    const classChefsImages = 'chefs-images_section-chefs';
  return (
    <section className='section-chefs'>
        <TitleSection
        classTitle={classSectionTitle} 
        textSection={titleSection}
        />
        <ChefsImages 
        classChefs={classChefsImages}
        />
    </section>
  )
}

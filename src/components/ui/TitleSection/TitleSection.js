import React from 'react'

export default function SectionTitle({classTitle, textSection}) {
  return (
    <div className={`section-title ${classTitle}`}>
      <h2 className='section-title__title'>{textSection.title}</h2>
      <h3 className='section-title__subtitle'>{textSection.subtitle}</h3>
    </div>
  )
}

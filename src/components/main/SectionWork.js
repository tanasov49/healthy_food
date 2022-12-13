import React, { useState } from 'react'
import TitleSection from '../ui/TitleSection/TitleSection'
import Skills from '../ui/Skills/Skills'

export default function SectionWork() {
    const classSectionTitle = 'section-title_work'
    const classSkills = 'skills_work'
    const titleSectionWork = {
      title: 'Work', subtitle: 'how it works'
    }
    const [skillsTextWork] = useState([
        {title: 'Pick meals', text: 'Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.'},
        {title: 'Choose how often', text: 'Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!'},
        {title: 'fast deliveries', text: 'Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.'},
        {title: 'tasty meals', text: 'Gobble makes cooking fast, so you have more time to unwind and be with family.'}
    ])
  return (
    <section className='section-work'>
        <TitleSection 
            textSection={titleSectionWork}
            classTitle={classSectionTitle}
        />
        <Skills 
            textSkills={skillsTextWork}
            classSkills={classSkills}
        />

    </section>
  )
}

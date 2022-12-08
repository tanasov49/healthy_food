import React from 'react'
import Recipes from '../ui/Recipes/Recipes';
import SectionTitle from '../ui/SectionTitle/SectionTitle'

export default function SectionRecipes() {
    const classSectionTitle = 'section-title_recipes';
    const titleSection ={title: 'RECIPES', subtitle: `Recipes From Our Chefs`};
    const classRecipes = 'recipes_section-recipes'
  return (
    <section className='section-recipes'>
        <SectionTitle 
            classTitle={classSectionTitle} 
            textSection={titleSection}
        />
        <Recipes 
            classBlock={classRecipes}
        />
    </section>
  )
}

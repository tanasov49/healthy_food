import React, { useState } from 'react'
import RecipeImage1 from '../../../images/recipes-images/recipe_image1.jpg';
import RecipeImage2 from '../../../images/recipes-images/recipe_image2.jpg';
import RecipeImage3 from '../../../images/recipes-images/recipe_image3.jpg';
import RecipeImage4 from '../../../images/recipes-images/recipe_image4.jpg';

import RecipesComments from './RecipesComments/RecipesComments';
import RecipeActive from './RecipeActive/RecipeActive';
export default function Recipes({classBlock}) {
    const [recipes] = useState([
        {src: RecipeImage1, title: 'breakfast', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', author: 'Jason Keller', date: '05 Jul 2016', views: '220', comments: '45', url: '#'},
        {src: RecipeImage2, title: 'lunch', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', author: 'John Smith', date: '07 Jan 2016', views: '230', comments: '35', url: '#'},
        {src: RecipeImage3, title: 'dinner', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', author: 'Katy Filmer', date: '18 Jun 2016', views: '240', comments: '56', url: '#'},
        {src: RecipeImage4, title: 'sweets', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', author: 'Amy Solm', date: '18 Jun 2016', views: '251', comments: '15', url: '#'}
    ])
    const [recipeCard, setRecipeCard] = useState(recipes[3])
    const handleRecipeCard = (item) => {
      setRecipeCard(item)
    }

  return (
    <div className={`recipes ${classBlock}`}>
      <RecipeActive 
        item={recipeCard}
      />
      <RecipesComments 
        recipes={recipes}
        onCardClick={handleRecipeCard}
        
      />
    </div>
  )
}

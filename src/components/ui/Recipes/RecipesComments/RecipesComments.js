import React from 'react'
import RecipesIcons from '../RecipesIcons/RecipesIcons'
export default function RecipesComments({recipes, onCardClick}) {
  const classRecipeComments = 'recipe-icons_recipes-comments'
  return (
    <div className='recipes-comments'>
      {recipes.map((item, key) => {
        const handleCard = () => onCardClick(item)
        return (
          <div key={key} className='recipe-comment' onClick={handleCard}>
          <p className='recipe-comment__text'>{item.text}</p>
          <h3 className='recipe-comment__title'>{item.title}</h3>
          <p className='recipe-comment__date'>{item.date}</p>
          <RecipesIcons 
            classBlock={classRecipeComments}
            item={item}
          />
        </div>
        )
      }

      )}
    </div>
  )
}

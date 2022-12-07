import React from 'react'
export default function RecipesComments({recipes, CommentSvg, ViewSvg, onCardClick}) {
  
  return (
    <div className='recipes-comments'>
      {recipes.map((item, key) => {
        const handleCard = () => onCardClick(item)
        return (
          <div key={key} className='recipe-comment' onClick={handleCard}>
          <p className='recipe-comment__text'>{item.text}</p>
          <h3 className='recipe-comment__title'>{item.title}</h3>
          <p className='recipe-comment__date'>{item.date}</p>
          <div className='recipe-views'>
            <ViewSvg className='recipe-views__svg' />
            <span className='recipe-views__view'>{item.views}</span>
          </div>
          <div className='recipe-comments'>
            <CommentSvg className='recipe-comments__svg' />
            <span className='recipe-views__view'>{item.comments}</span>
          </div>
        </div>
        )
      }

      )}
    </div>
  )
}

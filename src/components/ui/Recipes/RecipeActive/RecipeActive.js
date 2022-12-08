import React from 'react'
import RecipesIcons from '../RecipesIcons/RecipesIcons';
import ButtonLeft from '../../../../images/svg/button-left.svg?url';
export default function RecipeActive({item}) {
  const classRecipeActive = 'recipe-icons_recipe-active';
  return (
    <div className='recipe-active'>
    <h3 className='recipe-active__title'>{item ? item.title: ''}</h3>
    <p className='recipe-active__date'>{item ? item.date: ''}</p>
    <p className='recipe-active__text'>{item ? item.text: ''}</p>
    <p className='recipe-active__author'>{item ? item.author: ''}</p>
    <a className='recipe-active__link' href={item ? item.url: ''}><img src={ButtonLeft} alt='link' /></a>
    <RecipesIcons 
      classBlock={classRecipeActive}
      item={item}
    />
    <img className='recipe-active__image' src={item ? item.src: ''} alt='image-comment' />
  </div>
  )
}

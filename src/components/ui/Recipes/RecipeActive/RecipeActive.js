import React from 'react'

export default function RecipeActive({CommentSvg, ViewSvg, item}) {
  return (
    <div className='recipe-active' style={{background: item ? item.src: ''}}>
    <h3 className='recipe-active__title'>{item ? item.title: ''}</h3>
    <p className='recipe-active__date'>{item ? item.date: ''}</p>
    <p className='recipe-active__text'>{item ? item.text: ''}</p>
    <p className='recipe-active__author'>{item ? item.author: ''}</p>
    <a className='recipe-active__link' href={item ? item.url: ''}></a>
    <div className='recipe-views'>
      <ViewSvg className='recipe-views__svg' />
      <span className='recipe-views__view'>{item ? item.views: ''}</span>
    </div>
    <div className='recipe-comments'>
      <CommentSvg className='recipe-views__svg' />
      <span className='recipe-views__view'>{item ? item.comments: ''}</span>
    </div>
  </div>
  )
}

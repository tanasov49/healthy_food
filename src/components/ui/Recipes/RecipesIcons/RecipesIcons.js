import React from 'react';
import ViewSvg from '../../../../images/svg/view-icon.svg';
import CommentSvg from '../../../../images/svg/comment-icon.svg';
export default function RecipesIcons({classBlock, item}) {
  return (
    <div className={`recipe-icons ${classBlock}`}>
        <ViewSvg className='recipe-icons__svg' />
        <span className='recipe-icons__span'>{item.views}</span>
        <CommentSvg className='recipe-icons__svg' />
        <span className='recipe-icons__span'>{item.comments}</span>
  </div>
  )
}

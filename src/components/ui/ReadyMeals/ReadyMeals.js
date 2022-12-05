import React, { useState } from 'react'
import BtnOrder from '../BtnOrder/BtnOrder'
import Rating from '../Rating/Rating'
import ReadyMeal1 from '../../../images/ready-meals/ready_meal1.jpg';
import ReadyMeal2 from '../../../images/ready-meals/ready_meal2.jpg';
import ReadyMeal3 from '../../../images/ready-meals/ready_meal3.jpg';
import ReadyMeal4 from '../../../images/ready-meals/ready_meal4.jpg';
import ReadyMeal5 from '../../../images/ready-meals/ready_meal5.jpg';
import ReadyMeal6 from '../../../images/ready-meals/ready_meal6.jpg';
export default function ReadyMeals() {
  const classBtn = 'btn-order_ready-meal';
  const textBtn = 'Order'
  const [readyMeals] = useState([
    {src: ReadyMeal1, title: 'Featured Meal', subtitle: 'Served with french fries + drink', text: 'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...', url: '#'},
    {src: ReadyMeal2, title: 'Featured Meal', subtitle: 'Served with french fries + drink', text: 'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...', url: '#'},
    {src: ReadyMeal3, title: 'Featured Meal', subtitle: 'Served with french fries + drink', text: 'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...', url: '#'},
    {src: ReadyMeal4, title: 'Featured Meal', subtitle: 'Served with french fries + drink', text: 'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...', url: '#'},
    {src: ReadyMeal5, title: 'Featured Meal', subtitle: 'Served with french fries + drink', text: 'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...', url: '#'},
    {src: ReadyMeal6, title: 'Featured Meal', subtitle: 'Served with french fries + drink', text: 'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...', url: '#'}
  ])
  return (
    <div className='ready-meals'>
      {readyMeals.map((item, key) => 
            <div key={key} className='ready-meal'>
              <a className='ready-meal__url' href={item.url} target='_blank'></a>
              <img src={item.src} alt={item.title} className='ready-meal__image' />
              <h3 className='ready-meal__title'>{item.title}</h3>
              <h4 className='ready-meal__subtitle'>{item.subtitle}</h4>
              <p className='ready-meal__text'>{item.text}</p>
              <Rating />
              <BtnOrder 
                classBlock={classBtn}
                textBtn={textBtn}
              />
            </div>
      )}
    </div>
  )
}

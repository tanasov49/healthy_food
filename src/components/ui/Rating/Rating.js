import React, {useState} from 'react'
import Star from '../../../images/svg/star.svg'
export default function Rating({rate, count, classBlock}) {
    const [rating, setRating] = useState(rate);
    const [hover, setHover] = useState(null);
  return (
    <div className={`rating ${classBlock}`}>
        {[...Array(5)].map((item, index) => {
            const ratingValue = index + 1;
            return (
                <label key={index} className='rating-label'>
                    <input 
                        type="radio"
                        className="rating-label__input"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                    />
                    <Star className={ratingValue <= (hover || rating) ? 'rating-label__svg rating-label__svg_active': 'rating-label__svg'} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}
                    />
                </label>
            )
        })}
        <p className='rating__count'>{count}</p>
    </div>
  )
}

import React, {useState} from 'react'
import Star from '../../../images/star.svg'
export default function Rating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
  return (
    <div className='rating'>
        {[...Array(5)].map((item, index) => {
            const ratingValue = index + 1;
            return (
                <label key={index} className='rating-label'>
                    <input 
                        type="radio"
                        className="rating-label__input"
                        value={ratingValue}
                        
                    />
                    <Star className='rating-label__svg' onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}
                    onClick={() => setRating(ratingValue)}
                    />
                    
                </label>
            )
        })}
    </div>
  )
}

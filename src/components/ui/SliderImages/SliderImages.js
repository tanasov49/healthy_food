import React, { useState, useEffect } from 'react'
import ButtonHandle from '../ButtonHandle/ButtonHandle';
import ButtonLeft from '../../../images/svg/button-left.svg?url';
import ButtonRight from '../../../images/svg/button-right.svg?url';
import ImageFood1 from '../../../images/images_food/imagefood1.jpg';
import ImageFood2 from '../../../images/images_food/imagefood2.jpg';
import ImageFood3 from '../../../images/images_food/imagefood3.jpg';
import ImageFood4 from '../../../images/images_food/imagefood4.jpg';
import ImageFood5 from '../../../images/images_food/imagefood5.jpg';

export default function SliderImages({classBlock}) {
  const [imagesFood] = useState([
    {src: ImageFood1, alt: 'ImageFood1'},
    {src: ImageFood2, alt: 'ImageFood2'},
    {src: ImageFood3, alt: 'ImageFood3'},
    {src: ImageFood4, alt: 'ImageFood4'},
    {src: ImageFood5, alt: 'ImageFood5'},
  ])
  const [slideIndex, setSlideIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setWidth(384);
    } else if (window.innerWidth < 1024) {
      setWidth(250);
    }
  })
  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width
      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;
      const maxOffset = -(width * (imagesFood.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };
  useEffect(() => {
    const lastIndex = imagesFood.length - 1;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
    } 
    else if (offset === -(width * (imagesFood.length - 1))) {
      setOffset(0)
    }
  }, [slideIndex, imagesFood, offset])

  useEffect(() => {
    let slider = setInterval(() => handleRightArrowClick(prevState => prevState + 1), 1500);
    return () => {
      clearInterval(slider)
    }
  }, [handleRightArrowClick])

  return (
    <div className={`slider-images ${classBlock}`}>
      <ButtonHandle
      image={ButtonLeft}
      onClick={handleLeftArrowClick}
      />
      <div className='images-food' >
        {imagesFood.map((item, key) =>
        <img className={`images-food__image`} style={{ transform: `translateX(${offset}px)`}} key={key} src={item.src} alt={item.alt} />
        )}
      </div>
      <ButtonHandle
      image={ButtonRight}
      onClick={handleRightArrowClick}
      />
    </div>
  )
}

import React, { useState } from 'react'
import AddressSvg from '../../../images/svg/address_svg.svg?url';
import CallSvg from '../../../images/svg/call_svg.svg?url';
import TimeSvg from '../../../images/svg/time_svg.svg?url';
export default function Contacts({classBlock}) {
  const [contactsInfo] = useState([
    {src: TimeSvg, link: '#', linkText: 'Today 10:00 am - 7:00 pm', span: 'Working hours'},
    {src: AddressSvg, link: '#', linkText: 'Velyka Vasylkivska 100', span: 'Get Directions'},
    {src: CallSvg, link: '#', linkText: '+38 (063)833 24 15', span: 'Call Online'}
  ])
  return (
    <ul className={`contacts ${classBlock}`}>
      {contactsInfo.map((item, key) => 
          <li key={key} className='contact-item'>
            <img className='contact-item__image' src={item.src} alt={item.span} />
            <a href={item.link} className='contact-item__link'>{item.linkText}</a>
            <span className='contact-item__span'>{item.span}</span>
          </li>
      )}
    </ul>
  )
}

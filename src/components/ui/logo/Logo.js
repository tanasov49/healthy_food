import React from 'react'
import LogoPage from '../../../images/logo.png';
export default function Logo({classBlock}) {
  return (
    <div className={`logo ${classBlock}`}>
        <img className='logo__image' src={LogoPage} alt='logo' />
        <span className='logo__text'>Healthy switcher</span>
    </div>
  )
}

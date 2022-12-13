import React from 'react'

export default function MenuBtn({rootEl, handleOpenMenu, openMenu}) {
  return (
    <div ref={rootEl} className='menu-btn' onClick={handleOpenMenu}>
    <span className={openMenu ? 'menu-btn__icon menu-btn__icon_click' : 'menu-btn__icon'}></span>
    <span className={openMenu ? 'menu-btn__text menu-btn__text_click' : 'menu-btn__text'}>Menu</span>
  </div>
  )
}

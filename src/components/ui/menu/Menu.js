import React from 'react'
export default function Menu({menuLinks, classBlock, openMenu, classMenuActive}) {
  return (
    <ul className={openMenu ? `menu ${classBlock} ${classMenuActive}`: `menu ${classBlock}`}>
        {menuLinks.map((item, key) => 
            <li key={key} className='menu-link'>
                <a className='menu-link__item' href={item.link}>{item.text}</a>
            </li>
        )}
    </ul>
  )
}

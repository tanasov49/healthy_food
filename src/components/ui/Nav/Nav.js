import React, { useState, useEffect, useRef}from 'react'
import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import MenuBtn from '../MenuBtn/MenuBtn'

export default function Nav() {
    const [menuLinks] = useState([
        {link: '#', text: 'Menu'},
        {link: '#', text: 'Recipes'},
        {link: '#', text: 'Chefs'},
        {link: '#', text: 'Contacts'},
    ])
    const classLogo = 'logo_header';
    const classMenu = 'menu_header';
    const classMenuActive = 'menu_header-active';
    const [openMenu, setOpenMenu] = useState(false)
    
    const handleOpenMenu = (e) => {
      if (openMenu === false) {
        setOpenMenu(true)
      } else if (openMenu === true) {
        setOpenMenu(false)
      }
    }
    // Клик вне элемента menu-btn
    const rootEl = useRef(null);
    useEffect(() => {
      const onClick = e => rootEl.current.contains(e.target) || setOpenMenu(false);
      document.addEventListener('click', onClick);
      
    }, []);

  return (
    <nav className='nav'>
        <Logo
        classBlock={classLogo}
        />
        <MenuBtn 
          rootEl={rootEl}
          handleOpenMenu={handleOpenMenu}
          openMenu={openMenu}
        />
        <Menu 
          menuLinks={menuLinks}
          classBlock={classMenu}
          openMenu={openMenu}
          classMenuActive={classMenuActive}
        />
    </nav>
  )
}

import React, { useState } from 'react'
import Logo from './logo/Logo'
import Menu from './menu/Menu'

export default function Nav() {
    const [menuLinks] = useState([
        {link: '#', text: 'Menu'},
        {link: '#', text: 'Recipes'},
        {link: '#', text: 'Chefs'},
        {link: '#', text: 'Contacts'},
    ])
    const classLogo = 'logo_header';
    const classMenu = 'menu_header';
  return (
    <nav className='nav'>
        <Logo
        classBlock={classLogo}
        />
        <Menu 
        menuLinks={menuLinks}
        classBlock={classMenu}
        />
    </nav>
  )
}

import React from 'react'
import Contacts from './ui/Contacts/Contacts'
import Logo from './ui/logo/Logo'

export default function Footer() {
  const classContacts = 'contacts_footer';
  const classLogoFooter = 'logo_footer'
  return (
    <footer className='footer'>
      <Contacts 
        classBlock={classContacts}
      />
      <Logo 
        classBlock={classLogoFooter}
      />
      <a href='https://www.figma.com/file/DmIkAGpRNjIg7EqJRXQV4I/Healthy-food-%2B?node-id=2%3A2&t=RzlZCjQllkf95JLe-0' target='_blank' className='footer__text'>© Designed by Yellow Snow. All Rights Reserved.</a>
    </footer>
  )
}

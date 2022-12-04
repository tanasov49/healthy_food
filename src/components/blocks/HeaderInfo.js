import React, { useState } from 'react'
import LinkHeader from '../ui/linkHeader/LinkHeader'
import HeaderContacts from '../ui/Contacts/Contacts'
export default function HeaderInfo() {
  const headerInfoText = 
    {title: `Your favourite food
    delivered hot & fresh`, subtitle: 'HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh homemade dinner in just 15 minutes.'};
    const classBtn = 'header-info__btn';
    const classContacts = 'contacts_header'
  return (
    <div className='header-info'>
      <h1 className='header-info__title'>{headerInfoText.title}</h1>
      <h3 className='header-info__subtitle'>{headerInfoText.subtitle}</h3>
      <LinkHeader 
      classBlock={classBtn}
      />
      <HeaderContacts 
      classBlock={classContacts}
      />
    </div>
  )
}

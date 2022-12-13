import React, { useState } from 'react'
import BtnOrder from '../BtnOrder/BtnOrder'
import Contacts from '../Contacts/Contacts'
export default function HeaderInfo() {
  const headerInfoText = 
    {title: `Your favourite food
    delivered hot & fresh`, subtitle: 'HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh homemade dinner in just 15 minutes.'};
    const classBtn = 'btn-order_header-info';
    const classContacts = 'contacts_header';
    const textBtn = 'Order Now';
  return (
    <div className='header-info'>
      <h1 className='header-info__title'>{headerInfoText.title}</h1>
      <h3 className='header-info__subtitle'>{headerInfoText.subtitle}</h3>
      <BtnOrder 
      classBlock={classBtn}
      textBtn={textBtn}
      />
      <Contacts
      classBlock={classContacts}
      />
    </div>
  )
}

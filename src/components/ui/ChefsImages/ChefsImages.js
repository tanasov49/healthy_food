import React, { useState } from 'react';
import Chef1 from '../../../images/chefs-images/chef1.png';
import dish1ofChef1 from '../../../images/chefs-images/chefs_dishes1/dish1.jpg';
import dish2ofChef1 from '../../../images/chefs-images/chefs_dishes1/dish2.jpg';
import dish3ofChef1 from '../../../images/chefs-images/chefs_dishes2/dish3.jpg';
import dish1ofChef2 from '../../../images/chefs-images/chefs_dishes2/dish1.jpg';
import dish2ofChef2 from '../../../images/chefs-images/chefs_dishes2/dish2.jpg';
import dish3ofChef2 from '../../../images/chefs-images/chefs_dishes1/dish3.jpg';
import dish1ofChef3 from '../../../images/chefs-images/chefs_dishes3/dish1.jpg';
import dish2ofChef3 from '../../../images/chefs-images/chefs_dishes3/dish2.jpg';
import dish3ofChef3 from '../../../images/chefs-images/chefs_dishes3/dish3.jpg';
import Chef2 from '../../../images/chefs-images/chef2.png';
import Chef3 from '../../../images/chefs-images/chef3.png';
export default function ChefsImages({classChefs}) {
    const [chefsInfo] = useState([
        {src: Chef1, title: 'Gregory Flores', subtitle: 'Chef of the cold', dishes: [dish1ofChef1, dish2ofChef1, dish3ofChef1]},
        {src: Chef2, title: 'Annette Cooper', subtitle: 'Chef of the hot', dishes: [dish1ofChef2, dish2ofChef2, dish3ofChef2]},
        {src: Chef3, title: 'Greg Fox', subtitle: 'Сhef macro kitchen', dishes: [dish1ofChef3, dish2ofChef3, dish3ofChef3]}
    ])
  return (
    <div className={`chefs-images ${classChefs}`}>
            {chefsInfo.map((item, key) =>
                <div key={key} className='chef-image'> 
                    <img className='chef-image__image' src={item.src} alt={item.title} />
                    <h3 className='chef-image__title'>{item.title}</h3>
                    <p className='chef-image__subtitle'>{item.subtitle}</p>
                    <div className='chef-dish'>
                    {item.dishes.map((sm, skey) => 
                        <img key={skey} src={sm} alt='dish' />
                    )}
                    </div>
                </div>
            )}
    </div>
  )
}

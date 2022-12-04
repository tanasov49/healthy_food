import React from 'react'

export default function Skills({textSkills, classSkills}) {
  return (
    <ul className={`skills ${classSkills}`}>
        {textSkills.map((item, key) => 
            <li key={key} className='skill-item'>
                <h4 className='skill-item__title'>{item.title}</h4>
                <p className='skill-item__text'>{item.text}</p>
            </li>
        )}

    </ul>
  )
}

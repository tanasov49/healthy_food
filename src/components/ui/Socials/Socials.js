import React, {useState} from 'react';
import TweetSvg from '../../../images/svg/twitter-icon.svg';
import InstagramSvg from '../../../images/svg/instagram-icon.svg';
import FacebookSvg from '../../../images/svg/facebook-icon.svg';
import BtnOrder from '../BtnOrder/BtnOrder';
export default function Socials({classBlock}) {
  const [socials] = useState([
    {svg: TweetSvg, title: 'Twitter', url: 'https://twitter.com/lgparfenov/status/1513431916707463168?s=20&t=g6bY1WLUgQa5kdhkJqJaKQ'},
    {svg: InstagramSvg, title: 'Instagram', url: 'https://www.instagram.com/leonidparfenoff/'},
    {svg: FacebookSvg, title: 'Facebook', url: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnoizemc%2Fposts%2Fpfbid02skPHt7HZAG8j84WxJxVz3ijb3QYRaMKBe9W918ukrNKj1xasYLmt36GtZHHMMdifl&show_text=true&width=200'}
  ])
  const classBtn = 'btn-order_social-item';
  const textBtn = 'follow us';
  return (
    <ul className={`socials ${classBlock}`}>
      {socials.map((item, key) => 
        <li key={key} className='social-item'>
          <item.svg className='social-item__svg' />
          <h3 className='social-item__title'>{item.title}</h3>
          <BtnOrder 
            classBlock={classBtn}
            textBtn={textBtn}
          />
          <iframe scrolling='no' src={item.url} frameborder='0' className='social-item__iframe'></iframe>
        </li>
      )}
    </ul>
    
  )
}

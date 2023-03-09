import React from 'react'
import footerImg from '../assets/footer_img.png'
import socialIcon1 from '../assets/icon2.png'
import socialIcon2 from '../assets/icon3.png'
import socialIcon3 from '../assets/icon1.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_img'>
        <img src={footerImg} alt='loading' />
      </div>
      <div className='footer_middle_content'>
        <h5>Dessert.Bar.Kitchen</h5>
        <p>+040 2355 7261</p>
        <p>savory@qodeinteractive.com</p>
      </div>
      <div className='footer_address'>
        <p>
          Plot No.8-2, 293/82/A/161, Rd Number 13, Jubilee Hills, Hyderabad,
          Telangana 500033
        </p>
      </div>
      <div className='icons d-flex justify-content-center'>
        <ul className='d-flex list-inline'>
          <li>
            <img src={socialIcon1} alt='loading' />
          </li>
          <li>
            <img src={socialIcon2} alt='loading' />
          </li>
          <li>
            <img src={socialIcon3} alt='loading' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

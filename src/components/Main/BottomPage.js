import React from 'react'
import CircleImg from '../assets/circle_img.png'
import ModernChair1 from '../assets/Modern_Chair1.png'
import ModernChair2 from '../assets/Modern_Chair2.png'

const BottomPage = () => {
  return (
    <div className='bottomPage'>
      <div className='content'>
        <p>
          Experience culinary excellence at our restaurant. Book your table
          today and get ready to indulge in a delightful dining experience!!
        </p>
      </div>
      <div className='left_chair'>
        <img src={ModernChair2} alt='loading' />
      </div>
      <div className='right_chair'>
        <img src={ModernChair1} alt='loading' />
      </div>
      <div className='circle_content'>
        <img src={CircleImg} alt='loading' />
      </div>
    </div>
  )
}

export default BottomPage

import React from 'react'
import CImg1 from '../assets/unsplash_1.png'
import CImg2 from '../assets/unsplash_2.png'
import CImg3 from '../assets/unsplash_3.png'

const TopPage = () => {
  return (
    <div className='carousel_topPage'>
      <div
        id='carouselExampleCaptions'
        className='carousel slide carousel-fade'
        data-bs-ride='false'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={CImg1} className='d-block w-100' alt='loading' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Dessert | Bar | Kitchen</h5>
              <p>
                The Barn is a global food experience and our dessert bar is
                legendary!
              </p>
              <button className='rounded-pill px-3 py-1'>Contact Us</button>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={CImg2} className='d-block w-100' alt='loading' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Dessert | Bar | Kitchen</h5>
              <p>
                The Barn is a global food experience and our dessert bar is
                legendary!
              </p>
              <button className='rounded-pill px-3 py-1'>Contact Us</button>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={CImg3} className='d-block w-100' alt='loading' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Dessert | Bar | Kitchen</h5>
              <p>
                The Barn is a global food experience and our dessert bar is
                legendary!
              </p>
              <button className='rounded-pill px-3 py-1'>Contact Us</button>
            </div>
          </div>
        </div>
        {/* <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button> */}
      </div>
    </div>
  )
}

export default TopPage

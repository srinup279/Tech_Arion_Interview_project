import React from 'react'
import { useSelector } from 'react-redux'
import playImg from '../assets/play_img.png'
import delightCup from '../assets/delight_cup.png'
import Ellipse2 from '../assets/Ellipse2.png'

const DelightCare = () => {
  const state = useSelector(data => data)
  if (state.loggedIn) {
    return (
      <div className='delightCare'>
        <div className='circle_cup_img'>
          <img src={delightCup} alt='loading' />
        </div>
        <div className='delight_ellipse2'>
          <img src={Ellipse2} alt='loading' />
        </div>
        <div className='d-flex justify-content-end'>
          <div className='MostLovedDish'>
            <h6>#MostLovedDish</h6>
            <h2>Delight Cake</h2>
            <div>
              <span>
                <img src={playImg} alt='loading' />
              </span>
              <span className='play_now'>Play Now</span>
            </div>
            <div className='btns'>
              <button>Order Now</button>
              <button>View Menu</button>
            </div>
          </div>
          <div className='rating_box'>
            <ul className='d-flex list-inline '>
              <li className='mx-2'>Overview</li>
              <li className='mx-2'>|</li>
              <li className='mx-2'>Incredients</li>
            </ul>
            <h2>Delight Cake</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standar
            </p>
            <ul className='d-flex list-inline justify-content-between'>
              <li>
                <i class='fa fa-thumbs-o-up' aria-hidden='true'></i> 386
              </li>
              <li>
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default DelightCare

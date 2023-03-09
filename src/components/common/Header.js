import React, { useState } from 'react'
import Logo from '../assets/Screenshot_20230.png'
import Ellipse from '../assets/Ellipse_24.png'
import loginPageLogo from '../assets/login_page_logo.png'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const state = useSelector(data => data)
  const url =
    'https://admin.gifinfinity.com/accounts/api/client/v1/user-otp-login/'
  const [loginData, setLoginData] = useState({
    phone: '',
    otp: ''
  })
  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post(url, loginData)
      .then(res => res.data)
      .then(data => {
        console.log('data token::', data)
        sessionStorage.setItem('token', data.access)
        sessionStorage.setItem('message', data.message)
        dispatch({ type: 'login' })
        setLoginData({ phone: '', otp: '' })
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  const handleLogout = () => {
    sessionStorage.clear()
    dispatch({ type: 'logout' })
  }
  return (
    <div className='header d-flex justify-content-between'>
      <div className='left_side'>
        <ul className='d-flex list-inline'>
          {state.loggedIn ? (
            <li onClick={handleLogout}>LOGOUT</li>
          ) : (
            <li data-bs-toggle='modal' data-bs-target='#staticBackdrop'>
              LOGIN
            </li>
          )}
          <li>RESERVATION</li>
          <li>PRIVATE PARTIES</li>
        </ul>
      </div>
      <div className='logo'>
        <img src={Logo} alt='loading' />
      </div>
      <div className='right_side'>
        <ul className='d-flex list-inline'>
          <li>EVENTS</li>
          <li>CONTACT US</li>
          <li>ABOUT US</li>
        </ul>
      </div>
      <div className='ellipse'>
        <img src={Ellipse} alt='loading' />
      </div>

      <div
        className='modal fade'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className='content_box'>
                <div className='text-center'>
                  <img src={loginPageLogo} alt='loading' />
                </div>
                <div className='popup_text'>
                  <h5>Welcome to Techarion</h5>
                  <p className='mb-0'>
                    Please sign-in to your account and start the adventure
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Phone number
                  </label>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Phone number'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                      value={loginData.phone}
                      onChange={e =>
                        setLoginData({ ...loginData, phone: e.target.value })
                      }
                    />
                    <span className='input-group-text' id='basic-addon2'>
                      GET OTP
                    </span>
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='exampleFormControlInput1'
                      className='form-label'
                    >
                      OTP
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='exampleFormControlInput1'
                      placeholder='OTP'
                      value={loginData.otp}
                      onChange={e =>
                        setLoginData({ ...loginData, otp: e.target.value })
                      }
                    />
                  </div>
                  <button
                    className='d-block login_btn'
                    aria-label='Close'
                    data-bs-dismiss='modal'
                  >
                    Login
                  </button>
                </form>

                <div className='mt-3'>
                  <ul className='d-flex list-inline justify-content-center'>
                    <li className='popup_icons_facebook'>
                      <i
                        className='fa fa-facebook text-white'
                        aria-hidden='true'
                      ></i>
                    </li>
                    <li className='popup_icons_twitter'>
                      <i
                        className='fa fa-twitter text-white'
                        aria-hidden='true'
                      ></i>
                    </li>
                    <li className='popup_icons_envelope'>
                      <i
                        className='fa fa-envelope-o text-white'
                        aria-hidden='true'
                      ></i>
                    </li>
                    <li className='popup_icons_github'>
                      <i
                        className='fa fa-github text-white'
                        aria-hidden='true'
                      ></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Understood
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

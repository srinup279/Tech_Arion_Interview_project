import React, { useState, useEffect } from 'react'
import TopPage from './TopPage'
import BottomPage from './BottomPage'
import DelighCare from './DelightCare'
import axios from 'axios'
import { getHeaders } from '../../services/index'

const MainPage = () => {
  const url =
    'https://admin.gifinfinity.com/products/api/client/v1/products-list'
  const [data, setData] = useState([])

  const fetchData = () => {
    axios
      .get(url, getHeaders())
      .then(res => res.data)
      .then(data => {
        setData(data.results)
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log('data::::::', data)
  return (
    <div>
      <TopPage />
      <BottomPage />
      <DelighCare />
    </div>
  )
}

export default MainPage

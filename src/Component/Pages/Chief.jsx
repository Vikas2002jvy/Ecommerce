import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Cards from './Cards'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const Chief = () => {
  return (
    <div>
      <Slider />
      <Cards />
    </div>
  )
}

export default Chief



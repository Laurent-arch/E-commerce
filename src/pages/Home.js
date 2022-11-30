import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home
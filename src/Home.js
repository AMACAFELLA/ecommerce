import React from 'react'
import ".//Home.css"
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' 
            src='https://m.media-amazon.com/images/I/61N83xtyr6L._SX3740_.jpg' 
            alt='Amazon logo' />

            <div className='home__row'>
                <Product />
            </div>
        </div>
    </div>
  )
}

export default Home
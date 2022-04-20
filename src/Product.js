import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>The lean startup</p>
            <p className='product__price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className='product__rating'>
                <p>⭐</p>
            </div>
        </div> 

        <img className='product__image' 
        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg' 
        alt='product' />

        <button>Add to cart</button>
    </div>
  )
}

export default Product
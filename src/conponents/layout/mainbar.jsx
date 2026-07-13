import React from 'react'
import { productGoods } from '../../data/productsData'
import img from '../../assets/images/cpui.png'
import './mainbar.css'
import BoxOne from '../common/boxOne'
function Mainbar({ filter,}) {
  return (
    <div className='main mt-7'>
      {
        productGoods
        .filter((item) => item.category == filter)
        .map((item) =>
        (
          <div key={item.id}>
            <img src={img} alt="" />
            <h1>{item.name}</h1>
            <h2>{item.fullName}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Mainbar

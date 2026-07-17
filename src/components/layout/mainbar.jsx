import React from 'react'
import { productGoods } from '../../data/productsData'
import './mainbar.css'
import BoxOne from '../common/boxOne'
function Mainbar({ filter,}) {
  return (
    
    <div className='main mt-7 h-[600px] overflow-auto'>
      {
        productGoods
        .filter((item) => item.category == filter)
        .map((item) =>
        (
          <div key={item.id} style={{
            borderRadius:"10px"
          }}>
            <img src={item.link} alt=""/>
            <h1>{item.name}</h1>
            <h2>{item.fullName}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Mainbar

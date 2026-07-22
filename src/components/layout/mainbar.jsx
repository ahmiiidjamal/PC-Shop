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
            borderRadius:"10px",
            padding:"3px",
            backgroundColor:"#f6f6f6"
          }}>
            <img src={item.link} alt=""/>
            <h1  className='p-[10px] text-[10px]'>{item.name}</h1>
            <h2>{item.fullName}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Mainbar

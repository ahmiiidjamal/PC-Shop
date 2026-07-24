import React from 'react'
import { productGoods } from '../../data/productsData'
import './mainbar.css'
import BoxOne from '../common/boxOne'
import AutohideSnackbar from '../common/snackbar';
import { Link } from 'react-router-dom';
function Mainbar({ filter, }) {
  return (

    <div className='main mt-7 h-[600px] overflow-auto'>
      {
        productGoods
          .filter((item) => item.category == filter)
          .map((item) =>
          (
            <div key={item.id} style={{
              borderRadius: "10px",
              padding: "3px",
              backgroundColor: "#f6f6f6"
            }}>
              <img src={item.link} alt="" />
              <h1 className='p-[10px] text-[15px]'>{item.name}</h1>
              <h2 className='p-[10px] text-[20px]'>{item.fullName}</h2>

              <h3 className='p-[10px] text-[20px] text-blue-400'>{item.price}$</h3>
              <div className='flex p-[10px] justify-between'>
                <Link to={`/productOne/${item.id}`} id={item.id}>
                  <button className='cursor-pointer hover:text-blue-400'>Show More</button>
                  {/* <AddShoppingCartIcon className='cursor-pointer hover:text-blue-400'/> */}
                </Link>
                <AutohideSnackbar />
              </div>
            </div>
          ))
      }
    </div>
  )
}

export default Mainbar



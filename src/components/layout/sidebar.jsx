import React from 'react'
import "./sidebar.css"
export function Cpu() {
  console.log("cpu work")
}

//all function for filtering


function Sidebar({setFilter}) {
  return (
    <div>
      <div className=' allbtn mt-5 flex flex-col items-start '>
        <button className='btn' onClick={() => {setFilter("cpu") }}>Processor</button>
        <button className='btn' onClick={() => {setFilter("gpu")}}>Graphic card</button>
        <button className='btn' onClick={() => {setFilter("ram") }}>RAM</button>
        <button className='btn' onClick={() => {setFilter("case") }}>Case</button>
        <button className='btn' onClick={() => {setFilter("motherboard")}}>MotherBoard</button>
        <button className='btn' onClick={() => {setFilter("cooling") }}>Cooling</button>
        <button className='btn' onClick={() => {setFilter("storage") }}>Storage</button>
        <button className='btn' onClick={() => {setFilter("power-supply") }}>P Supply</button>
        <button className='btn' onClick={() => {setFilter("accessories") }}>Monitor</button>

      </div>
    </div>
  )
}

export default Sidebar

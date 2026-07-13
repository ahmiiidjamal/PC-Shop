import React from 'react'

function Footer() {
  return (
    <div style={{
      backgroundColor: "#333"
    }}
    >
      <div className='myContainer'
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "45px",

        }}>
        <h3 className='font-bold text-white text-[14px]'>@Copyright Reserved</h3>
        <h3 className='font-bold text-white text-[14px]'>Contact Us</h3>
        <a target='_blank' href='https://ahmiiidjamal.github.io/My-Porfolio/' className='font-bold text-white text-[14px]'>Our Web</a>
      </div>
    </div>
  )
}

export default Footer

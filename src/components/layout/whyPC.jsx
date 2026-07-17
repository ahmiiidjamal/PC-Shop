import React from 'react'
import BoxTwo from '../common/boxTwo'
import ScrollAnimate from '../common/scrollanimate'

function WhyPC() {
  return (
    <ScrollAnimate>
    <div className='myContainer' style={{
       display:"grid",
        gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",
        marginTop:"40px",
        gap:"30px"
    }}>
      
      <BoxTwo name={"a guarantee"} explain={"Genuine guarantee of parts safety"} btn={"Show"}/>
      <BoxTwo name={"Experians +20"} explain={"Extensive experience in selling computer parts"} btn={"Show"}/>
      <BoxTwo name={"prices"} explain={"Competitive prices, like factory prices"} btn={"Show"}/>
    </div>
    </ScrollAnimate>
  )
}

export default WhyPC

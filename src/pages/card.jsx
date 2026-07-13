import React from 'react'
import { useState } from 'react'
import Test from '../test'
function Card() {
  const [name ,setName] = useState("Ahmed")
  return (
    <div>
      {name}
      <Test test={setName} work={name}/>
    </div>
  )
}

export default Card

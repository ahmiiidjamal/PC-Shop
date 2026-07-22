import React from 'react'
import { useState } from 'react'
import Test from '../test'
import { useContext } from 'react'
import { DataCardContext } from '../hooks/useContext'
function Card() {
  const [name ,setName] = useState("Ahmed")
  const dataFromContext = useContext(DataCardContext)
  return (
    <div>
      {name}
      <Test test={setName} work={name}/>
      <div>{}</div>
      <div>{}</div>
      {console.log(dataFromContext[0].id)}
    </div>
  )
}

export default Card

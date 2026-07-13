import React from 'react'

function Test({test , work}) {
  // test("yazan")
  
    return (
    <div>
      <button onClick={() => test(work === "yazan" ? "ahmed": "yazan")}>Click</button>

    </div>
  )
}

export default Test

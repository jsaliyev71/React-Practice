import React, { useEffect, useState } from 'react'

function UseEffect() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);


  useEffect(() => {
    if(start) {
      console.log('salam');
    }
  }, [count])

  return (
    <div className='reactElementCon'>
      <br />
      <div className='useEffectButton' onClick={() => {setCount(count + 1); setStart(true)}}>{count}</div>
    </div>
  )
}

export default UseEffect
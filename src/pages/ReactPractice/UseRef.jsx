import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
  const [name, setName] = useState()
  const prevName = useRef('')

  useEffect(() => {
    prevName.current = name
  }, [name])

  const [mouse, setMouse] = useState({x: 0, y: 0})
  const box = useRef({x: 0, y: 0})

  useEffect(() => {
    function mouseMove(e) {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      })
    }

    function moveBox() {
        box.current.x = mouse.x - 120,
        box.current.y = mouse.y - 60
    }

    function checkFailure() {
      const ob = {y: 20, x: 0}

      if(box.current.y == ob.y) {
        alert("You clashed with the boxes.")
      }
    }

    // console.log(mouse)

    window.addEventListener('mousemove', mouseMove)

    moveBox()

    checkFailure()

    return () => window.removeEventListener('mousemove', mouseMove)
  }, [mouse]) 

  
  return (
    <div className='useRefCon'>
      <div className='ob1' style={{top: box.current.y, left: box.current.x}}></div>
      <div className='ob'></div>
      
      <div className='input'>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <div>My name is {name} and the last name is {prevName.current}</div>
        <br />
      </div>
    </div>
  )
}

export default UseRef
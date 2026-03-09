import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../../redux/slide/counterSlice';
import {toggleTheme} from '../../redux/slide/themeSlice'


function Redux() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)
  const mode = useSelector((state) => state.theme.mode)

  const style = {
    backgroundColor: mode === "light" ? "#d0d0d0ff" : "#323232ff",
    color: mode === "light" ? "#1b1b1bff" : "#efefefff",
  }

  const buttonStyle = {
    backgroundColor: mode === "light" ? "#232323ff" : "#e3e3e3ff",
    color: mode === "light" ? "#ebebebff" : "#1b1b1bff",
  }

  return (
    <div className='reactElementCon redux' style={style}>
      <button style={buttonStyle} className='mode' onClick={() => dispatch(toggleTheme())}>Change Mode</button>
      <h3>Redux Counter</h3>
      <p>Count: {count}</p>
      
      <button style={buttonStyle} onClick={() => dispatch(decrement())}>-</button>
      <button style={buttonStyle} onClick={() => dispatch(increment())}>+</button>
      <button style={buttonStyle} onClick={() => dispatch(incrementByAmount(5))}>+ 5</button>
    </div>
  )
}

export default Redux
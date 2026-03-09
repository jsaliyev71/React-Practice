import React from 'react'

function Button({color, children, bColor, size, motion}) {
  return (
    <>
        <br />
        <button className='buttonComponent' onClick={() => alert(motion)} style={{color: color, backgroundColor: bColor, fontSize: size}}>
            {children}
        </button>
        <br />
    </>
  )
}

export default Button
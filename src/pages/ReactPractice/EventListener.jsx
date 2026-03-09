import React, { useEffect, useRef, useState } from 'react'

function EventListener() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const pressedKeys = useRef({})

  useEffect(() => {

    const move = (key) => {
      if (key === "d") setX((prev) => prev + 5);
      if (key === "a") setX((prev) => prev - 5);
      if (key === "s") setY((prev) => prev + 5);
      if (key === "w") setY((prev) => prev - 5);
    }

    const handleKeyDown = (e) => {
      pressedKeys.current[e.key] = true;
    };

    const handleKeyUp = (e) => {
      pressedKeys.current[e.key] = false;
    };

    const moveBox = () => {
      Object.keys(pressedKeys.current).forEach((key) => {
        if (pressedKeys.current[key]) {
          move(key);
        }
    });

      requestAnimationFrame(moveBox); 
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    moveBox();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [])
  return (
    <div className='eventContainer'>
      <p>Use WASD to move Jala.</p>
      <p>Coordinates: {x}, {y}</p>
      <div className='ob1' style={{left: x, top: y}}>Jala</div>
    </div>
  )
}

export default EventListener
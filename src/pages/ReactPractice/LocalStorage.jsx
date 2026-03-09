import React, { useEffect, useState } from 'react'

function LocalStorage() {
  const [text, setText] = useState('')
  const [arr, setArr] = useState(() => {
    try {
      const stored = localStorage.getItem('list');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to parse localStorage list:", e);
      return [];
    }
  });

  const [placehold, setPlacehold] = useState('Write Something...')

  function addToList() {
    if(text != '') {
      setArr([...arr, text])
      setText('')
    } else {
      setPlacehold('Empty Input...')
    }
  }

  useEffect(() => {
      localStorage.setItem('list', JSON.stringify(arr));
      // console.log(arr)
  }, [arr])


  return (
    <div className='reactElementCon localStorage'>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder={placehold} />
      <button onClick={addToList}>Save</button>
      <br /><br />
      <ul>
        {arr.length > 0 ? arr.map(itm => {
          return <li key={itm}>{itm}</li>
        }) : <li>Nothing On The List</li>}
      </ul>
    </div>
  )
}

export default LocalStorage
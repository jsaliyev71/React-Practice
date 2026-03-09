import React, { useEffect, useState } from 'react'

function Fetch() {
  const [data, setData] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setData(data))
    
    // fetch('https://jsonplaceholder.typicode.com/comments')
    //   .then(res => res.json())
    //   .then(data => setData(data));

  }, [])
  return (
    <div className='reactElementCon'>
      <ul>
        {
          data.map(itm => {
            return (
              <li key={itm.id}>
                <h3>{itm.title}</h3>
                <p>{itm.body}</p>
                <br />
              </li>
              /* <li key={itm.id}>
                <h3>{itm.name}</h3>
                <span>{itm.email}</span>
                <p>{itm.body}</p>
                <br />
              </li> */
            )
          })
        }
      </ul>
    </div>
  )
}

export default Fetch
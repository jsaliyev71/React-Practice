import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DbJson() {
  const [data, setData] = useState([])
  
  useEffect(() => { 
    
    axios.get('http://localhost:3000/posts')
      .then(res => setData(res.data))
      .then(console.log(data))
      .catch(err => console.error("Error fetching posts: ", err))
  }, [])

  let content;

  if(data == false) {
    content = 'You are not listening to the db.json on port. Turn it on with "npx json-server --watch db.json" in terminal and make sure you are on the right directory. The content will appear after that.'
  }
  
  
  return (
    <div className='reactElementCon'>
      <ul>
        <h3>{content}</h3>
        
        {
          data.map(itm => {
            return (
              <>
                <li>
                  <h3>{itm.title}</h3>
                  <p>{itm.body}</p>
                </li>
                <br />
              </>
            )
          })
        }
      </ul>
    </div>
  )
}

export default DbJson
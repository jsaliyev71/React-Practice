import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AxiosCard from '../../components/ReactPracticeComponents/AxiosCard'

function DetailAxios() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err.message))
  }, [])

  return (
    <div className='reactElementCon'>
      <ul>
        {
          data?.map(itm => {
            return (
                <AxiosCard key={itm.id} itm={itm} />
            )
          })
        }
      </ul>
    </div>
  )
}

export default DetailAxios
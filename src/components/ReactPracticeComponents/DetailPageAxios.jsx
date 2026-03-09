import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../../assets/css/Practice.css'

function DetailPageAxios() {
    const [data, setData] = useState()
    const {user} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${user}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err.message))
    }, [])

    let address = [...Object.values(data?.address || {})].slice(0, 3)
    
    
    console.log(data);
    
  return (
    <div className='detailAxios'>
      <h3>{data?.name}</h3>
      <span>{data?.username}</span>
      <br />
      <table>
        <tr>
          <th>Email :</th>
          <td>{data?.email}</td>
        </tr>
        <tr>
          <th>Address: </th>
          <td>{address.map(itm => {return itm}).join(', ')}</td>
        </tr>
        <tr>
          <th>Phone: </th>
          <td>{data?.phone}</td>
        </tr>
      </table>
      <button className='axiosButton' onClick={() => navigate(-1)}>Go Back</button>
      
    </div>
  )
}

export default DetailPageAxios
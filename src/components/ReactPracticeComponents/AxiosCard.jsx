import React from 'react'
import { Link } from 'react-router-dom'

function AxiosCard({itm}) {
  return (
    <>
      <li className='axiosCard'>
        <p><b>Name:</b> {itm.name}</p>
        <p><b>Username:</b> {itm.username}</p>
        <p><b>Email:</b> {itm.email}</p>
        <Link className='axiosButton' to={`${itm.id}`}>Click For More</Link>
      </li>
      <br />
    </>
  )
}

export default AxiosCard
import React, { use, useEffect, useState } from 'react'
import axios from '../../../node_modules/axios'

function Axios() {
    const [data, setData] = useState([])

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data))
            .then(err => console.log(err))

            console.log(data)
    }, [])


    return (
        <div className='reactElementCon'>
            <ul>
                {data.map(itm => {
                    return (
                        <li>
                            <h4>{itm.name}</h4>
                            <span>{itm.email}</span>
                            <p>{itm.address.street}</p>
                            <br />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Axios
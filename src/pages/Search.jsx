import React, { useContext } from 'react'
import { Context } from '../context/ContextProvider'
import Card from '../components/Card'

function Search() {
    const {data, inValue} = useContext(Context)
    const filtered = data.filter(itm => itm.name.toLowerCase().includes(inValue.toLowerCase()))
  
  return (
    <div className='products'>
        { filtered.length > 0 ?
            filtered.map(itm => {
            return <Card key={itm.id} data={itm} />
        }) : <div className='searchAlter'>No Elements Matches Your Search.</div>
        }

    </div>
  )
}

export default Search
import React from 'react'
import Card from './Card'
// import { useOutletContext } from "react-router-dom";

function Products({data, category}) {
  
  return (
      <div className='products'>
          {data
          .filter(itm => category == true || itm.category == category) 
          .map(itm => {
              return <Card key={itm.id} data={itm} />
          })}
      </div>
  )
}

export default Products
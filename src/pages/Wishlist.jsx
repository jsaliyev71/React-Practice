import React, { useContext } from 'react'
import { Context } from '../context/ContextProvider'

function Wishlist() {
  const {wishList, setWishList, navigate, AddToWishList, DeleteAllProducts} = useContext(Context)
  console.log(wishList)

  return (
    <div className='wishContainer'>
      <div className='wishHeader'>
        <div>{wishList.length} Products</div>
        <button onClick={() => DeleteAllProducts(setWishList, "WishList", wishList)}>Clean The WishList.</button>
      </div>
      <ul className='wishlist'>
          {wishList.length > 0 ? wishList.map(itm => {
            return <li>
              <div className='wishPro'>
                <img src={itm.image} alt="" />
                <div className='wishTitle'>
                    <h3>{itm.name}</h3>
                    <span>{itm.category}</span>
                </div>
                <p>
                  {itm.description.slice(0, 100) + "..."}
                  <button onClick={() => navigate(`/products/${itm.id}`)}>
                      More Details
                  </button>
                </p>
                <div className='price'>{itm.price}$</div>
                <button onClick={() => AddToWishList(itm)}>Remove</button>
              </div>
            </li>
          }) : <div className='wishAlter'>No Products In WishList.</div>}
      </ul>
    </div>
  )
}

export default Wishlist
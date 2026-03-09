import React, { useContext, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import '../assets/css/ProductMenu.css'
import { SlBasket, SlBasketLoaded } from "react-icons/sl";
import { Context } from '../context/ContextProvider';
import { GoChecklist } from "react-icons/go";
import { FaSearch } from "react-icons/fa";

function ProductMenu() {
  const {categories, navigate, infoPanel, inValue, setInValue, basket} = useContext(Context)

  return (
    <>
      {infoPanel.state ? <div className={`${infoPanel.class} infoAnimation`}>{infoPanel.text}</div> : false}
      <div className='proCon'>
        <ul className='proMenu'>
          <li className='search'>
            <input type="text" value={inValue} onChange={(e) => setInValue(e.target.value)} placeholder='Search...'/>
            <button onClick={() => {navigate('/products/search')}}><FaSearch /></button>
          </li>
          <ul className='proIcons'>
            <li className='proBasket'>
              <Link to='/products/basket'>
                {basket.length > 0 ?<SlBasketLoaded /> : <SlBasket />}
                <span>{`${basket.length}`}</span>
              </Link>
            </li>
            <li className='proBasket'>
              <Link to={'/products/wishlist'}>
                <GoChecklist />
              </Link>
            </li>
          </ul>
          <li><NavLink to='/products/all'>All Products</NavLink></li>
          {       
              categories.map(ctg => {
                  return <li key={ctg}><NavLink to={`/products/${ctg}`}>{ctg}</NavLink></li>
              })
          }
        </ul>

        <div className='outletCon'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default ProductMenu
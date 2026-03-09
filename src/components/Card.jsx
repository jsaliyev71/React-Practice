import React, { useContext, useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { Context } from '../context/ContextProvider';
import { TbJewishStar, TbJewishStarFilled } from "react-icons/tb";

function Card({data}) {
  const {AddProduct, ProductCount, navigate, AddToWishList, wishList} = useContext(Context)

  const [input, setInput] = useState(1);

  return (
    <div className='cardCon'>
        <div className='card' onClick={() => navigate(`/products/${data.id}`)}>
            <img src={data.image} alt="" />
            <div className='cardTitle'>
                <h3>{data.name}</h3>
                <span>{data.category}</span>
                <div className='wishCon' onClick={(e) => {e.stopPropagation();AddToWishList(data)}}>
                    {wishList.find(itm => itm.id == data.id) ?  <TbJewishStarFilled /> : <TbJewishStar />}
                </div>
            </div>
            <p>
                {data.description.slice(0, 100) + "..."}
                <button onClick={() => navigate(`/products/${data.id}`)}>
                    More Details
                </button>
            </p>
            <div className='price'>
                <div>
                    <span>{data.price}$</span>
                    <p className='proCount'>{ProductCount(data.id)}</p>
                </div>
                <div>
                    <p><input className='countProduct' value={input} type="number" onChange={(e) => setInput(Number(e.target.value))} onClick={(e) => {e.stopPropagation()}} /></p>
                    <button onClick={(e) => {e.stopPropagation();AddProduct(data, input)}}>
                        <FaShoppingBasket />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
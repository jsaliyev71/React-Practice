import React, { useContext, useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../context/ContextProvider';
import { TbJewishStar, TbJewishStarFilled } from 'react-icons/tb';

const DetailPage = ({data}) => {
    const {AddProduct, ProductCount, AddToWishList, wishList} = useContext(Context)
    
    const {id} = useParams()
    const navigate = useNavigate()

    const [input, setInput] = useState(1);

    return (
    <div className='proDetail'>
        {
            data.filter(itm => itm.id == id).map(itm => {
                return <div key={itm.id} className='proDet'>
                    <img src={itm.image} alt={itm.name} />
                    <div>
                        <h3>{itm.name}</h3>
                        <span>{itm.category}</span>
                        <div className='wishCon' onClick={() => {AddToWishList(itm)}}>
                            {wishList.find(item => item.id == itm.id) ?  <TbJewishStarFilled /> : <TbJewishStar />}
                        </div>
                        <p>{itm.description}</p>
                        <div>
                            <div>
                                <span>{itm.price}$</span>
                                <p >Basket: {ProductCount(id)}</p>
                                <p>Total: {ProductCount(id) * itm.price}$</p>
                            </div>
                            <div>
                                <p><input value={input} type="number" onChange={(e) => setInput(Number(e.target.value))} /></p>
                                <button onClick={(e) => {AddProduct(itm, input)}}>
                                    <FaShoppingBasket />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
        <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
    )
}

export default DetailPage
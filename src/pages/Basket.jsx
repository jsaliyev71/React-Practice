import React, { useContext } from 'react'
import '../assets/css/ProductMenu.css'
import { Context } from '../context/ContextProvider';

function Basket() {
  const {AddProduct, RemoveProduct, DeleteProduct, DeleteAllProducts, ProductCount, basket, setBasket, navigate} = useContext(Context)
  const total = basket.reduce((sum, itm) => sum + itm.count * itm.price, 0)

  return (
    <div className='basketPage'>
      <div className='basketHeader'>
        <p>Total Amount: {total}$</p>
        <button onClick={() => DeleteAllProducts(setBasket, "Basket", basket)}>Delete All Products</button>
      </div>
      <div className='basketProducts'>
        {
        basket.length > 0 ? 
          basket.map(data => {

            return <div className='basketCon'>
                <div className='card'>
                  <img src={data.image} alt="" />
                  <div className='cardTitle'>
                      <h3>{data.name}</h3>
                      <span>{data.category}</span>
                  </div>
                  <p>
                      {data.description.slice(0, 100) + "..."}
                      <button onClick={() => navigate(`/products/${data.id}`)}>
                          More Details
                      </button>
                  </p>
                  <div className='price'><span>{data.price}$</span></div>
                  <div className='proCount'>
                    <button onClick={() => AddProduct(data, 1)}>Add</button>
                    <span>{data.count}</span>
                    <button onClick={() => RemoveProduct(data)}>Remove</button>
                  </div>
                  <div>
                    <p>Total: {ProductCount(data.id) * data.price}$</p>
                  </div>
                  <button onClick={() => DeleteProduct(data)}>Delete</button>
              </div>
            </div>
          }) : <h2 className='basketAlter'>Basket Is Empty</h2>
        }
      </div> 
    </div>
  )
}

export default Basket
import React, { createContext, useState } from 'react'
import { data } from '../data/data'
import { useNavigate } from 'react-router-dom'

export const Context = createContext()

export function ContextProvider({children}) {
  const [jala, setJala] = useState(7)

  const navigate = useNavigate()
  const [basket, setBasket] = useState([])
  const [wishList, setWishList] = useState([])
  const [inValue, setInValue] = useState("");
  const categories = [...new Set(data.map(itm => itm.category))]
  let [infoPanel, setInfoPanel] = useState({state: false, text: "", class: ""})


  const AddToWishList = (arg) => {
    setWishList((prev) => {
      const exist = prev.find(itm => itm.id == arg.id)

      if(exist) {
        const conf = confirm("Do You Want To Remove This Product From Your WishList.")
        if(conf) {
          return prev.filter(itm => itm.id != arg.id)
        } else {
          return prev
        }
      } else {
        return [...prev, {...arg}]
      }
    })
  }

  const ProductCount = (elem) => {
      const curPro = basket.find(ind => ind.id == elem)
      const count = curPro ? curPro.count : 0;
      return count;
  }

  const AddProduct = (arg, quantity) => {

    setBasket((prev) => {
      const exist = prev.find(itm => itm.id == arg.id)

      if(exist) {
        return prev.map((itm) => itm.id == arg.id ? {...itm, count: itm.count + quantity} : itm)
      } else {
        return [...prev, {...arg, count: quantity}]
      }
    })

  }
  
  const RemoveProduct = (arg) => {

      setBasket((prev) => {
        const exist = prev.find(itm => itm.id == arg.id)

        if(exist.count != 0) {
          if(exist.count > 1) {
            return prev.map((itm) => itm.id == arg.id ? {...itm, count: itm.count - 1} : itm)
          } else {
            const conf = confirm("Do You Want To Remove This Product?")

            if(conf) {
              return prev.filter(itm => itm.id != arg.id)
            } else {
              return prev
            }
          }
        }
      })
  }

  const DeleteProduct = (arg) => {
    const conf = confirm("Do You Want To Delete This Product From Your Basket?")

    if(conf) {
      setBasket((prev) => {
      return prev.filter(itm => itm.id != arg.id)
    })
    }
  }

  const DeleteAllProducts = (arg, text, arr) => {
    if(arr.length > 0) {
      const conf = confirm(`Do You Want To Delete All The Products From Your ${text}?`);

      if(conf) {
        arg([]);
        setInfoPanel({
          state: true,
          text: "All Products Deleted Successfully.",
          class: "infoDanger"
        })
      }
    } else {
      alert(`No Products In Your ${text}`)
    }
  }

  const value = {
    data,
    basket,
    wishList,
    setBasket,
    setWishList,
    categories,
    inValue,
    setInValue,
    infoPanel,
    navigate,
    
    AddProduct,
    ProductCount,
    RemoveProduct,
    DeleteProduct,
    DeleteAllProducts,
    AddToWishList,
    

    jala,
    setJala,
  }

  return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider
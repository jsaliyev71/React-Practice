import React from 'react'

// Huseyn Muellim Version.

function Functions() {

  const categories = [...new Set(data.map(itm => itm.category))]
  const [basket, setBasket] = useState([])
  let [infoPanel, setInfoPanel] = useState({state: false, text: "", class: ""})

  const ProductCount = (elem) => {
      const curPro = basket.find(ind => ind.id == elem)
      const count = curPro ? curPro.count : 0;
      return count;
  }

  const AddProduct = (arg, quantity) => {
      const arr = [...basket]
      const index = arr.findIndex(itm => itm.id == arg.id)
  
      if(quantity > 0) {
        if(index == -1) {
          arr.push({...arg, count: quantity})
        } else {
          arr[index].count += quantity;
        }
      } else {
        alert("The input can't be zero or negative number.")
      }

      quantity = 1;
  
      setBasket(arr)
      console.log(basket)
  }
  
  const RemoveProduct = (arg) => {
      const arr = [...basket]
      const index = arr.findIndex(itm => itm.id == arg.id)
  
      if(arr.length != 0) {
          if(arr[index].count > 1) {
              arr[index].count -= 1
          } else {
              arr.splice(index, 1);
          }
      }
  
      setBasket(arr)
      console.log(basket)
  }

  const DeleteProduct = (arg) => {
    const arr = [...basket]
    const index = arr.findIndex(itm => itm.id == arg.id)

    arr.splice(index, 1)

    setBasket(arr)
  }

  const DeleteAllProducts = () => {
    setBasket([]);
    setInfoPanel({
      state: true,
      text: "All Products Deleted Successfully.",
      class: "infoDanger"
    })
  }


  return (
    <div>Functions</div>
  )
}

export default Functions
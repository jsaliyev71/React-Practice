import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../Layout'
import Contact from '../pages/Contact'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import DetailPage from '../components/DetailPage'
import Products from '../components/Products'
import ReactPractise from '../pages/ReactPractise'
import ProductMenu from '../pages/ProductMenu'
import { reactPractice } from '../data/routes'
import DetailPageAxios from '../components/ReactPracticeComponents/DetailpageAxios'
import Basket from '../pages/Basket'
import { Context } from '../context/ContextProvider'
import Wishlist from '../pages/Wishlist'
import Search from '../pages/Search'

function AppRouter() {
  const {data} = useContext(Context)
  
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='products' element={<ProductMenu data={data} />}>
              <Route index element={<Navigate to="all" replace />} />
              <Route path='basket' element={<Basket />}/>
              <Route path='wishlist' element={<Wishlist />}/>
              <Route path='all' element={<Products data={data} category={true} />}/>
              <Route path='search' element={<Search />}/>
              {
                  data.map(itm => {
                      return <Route key={itm.category} path={`${itm.category}`} element={<Products data={data} category={itm.category} />}/>
                  })
              }
              <Route path=':id' element={<DetailPage data={data} />}/>
            </Route>
            <Route path='reactPractice' element={<ReactPractise />}>
              {reactPractice.map(({path, element: Component}) => {
                return <Route key={path} path={path} element={<Component />} />
              })}
              <Route path='detailAxios/:user' element={<DetailPageAxios />} />
            </Route>
            <Route path='*' element={<NotFound />}/>
        </Route>
    </Routes>
  )
}

export default AppRouter
import React from 'react'
import Product from './products/Product'
import Login from './login/Login'
import Register from './login/Register'
import Cart from './cart/Cart'
import Contact from './contact/Contact'
import { Route, Routes } from 'react-router-dom'
import DetailProduct from './utils/DetailProducts/DetailProduct'
import Homepage from './home/Homepage'
import About from './about/About'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/detail/:id' element={<DetailProduct/>} />
    </Routes>
  )
}

export default Pages

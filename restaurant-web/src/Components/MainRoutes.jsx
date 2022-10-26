import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OtpPage from '../Pages/OtpPage'
import Products from '../Pages/Products'
import Signup from '../Pages/Signup'
import SingleProduct from '../Pages/SingleProduct'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/otp' element={<OtpPage/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
    </Routes>
  )
}

export default MainRoutes
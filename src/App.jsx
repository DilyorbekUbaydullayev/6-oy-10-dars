
import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Details from './pages/Details'
export const CartContext = createContext()

function App() {
  const [cart, setCart]= useState([])

  useEffect(()=>{
    console.log(cart);
    
  },[cart])

  return (
    <CartContext.Provider value={{cart,setCart}}>
      <Routes>
        <Route path="/" element={<MainLayout><Home></Home></MainLayout>} />
        <Route path="/about" element={<MainLayout><About></About></MainLayout>} />
        <Route path="/products" element={<MainLayout><Products></Products></MainLayout>} />
        <Route path="/products/:id" element={<MainLayout><Details></Details></MainLayout>} />
        <Route path="/cart" element={<MainLayout><Cart></Cart></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login></Login></MainLayout>} />
        <Route path="/register" element={<MainLayout><Register></Register></MainLayout>} />
        
      </Routes>
    </CartContext.Provider>
  )
}

export default App
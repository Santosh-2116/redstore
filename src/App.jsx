import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Details from './pages/Details/Details'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Products from './pages/Products/Products'
import Cart from './pages/Cart/Cart'
import { useState } from 'react'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<><Products category={"all"}/></>}/>
        <Route path='/products/men' element={<><Products category={"men"}/></>}/>
        <Route path='/products/women' element={<><Products category={"women"}/></>}/>
        <Route path='/products/kids' element={<><Products category={"kids"}/></>}/>
        <Route path='/products/:productId' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

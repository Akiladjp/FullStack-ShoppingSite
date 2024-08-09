import { useEffect, React } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Shop } from './pages/Shop'
import { ShopCategory } from './pages/ShopCategory'
import { Cart } from './pages/Cart'
import { LoginSign } from './pages/LoginSign'
import { Product } from './pages/Product'
import men_banner from './assets/Frontend_Assets/banner_mens.png'
import women_banner from './assets/Frontend_Assets/banner_women.png'
import kid_banner from './assets/Frontend_Assets/banner_kids.png'
import { Footer } from './components/Footer/Footer'

function App() {
  
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category='women' />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid' />} />
        <Route path='/sports' element={<ShopCategory category='sports' />} />
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/login' element={<LoginSign/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App

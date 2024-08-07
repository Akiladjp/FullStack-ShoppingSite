import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Shop } from './pages/Shop'
import { ShopCategory } from './pages/ShopCategory'
import { Cart } from './pages/Cart'
import { LoginSign } from './pages/LoginSign'
import { Product } from './pages/Product'

function App() {
  

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory category='mens'/>} />
        <Route path='/women' element={<ShopCategory category='women' />} />
        <Route path='/kids' element={<ShopCategory category='kids' />} />
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/login' element={<LoginSign/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>

    </>
  )
}

export default App

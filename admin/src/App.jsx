import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Admin } from './pages/admin/Admin'

function App() {

  return (
    <>
      <Navbar/>
      <Admin/>
    </>
  )
}

export default App

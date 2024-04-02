import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'

function App() {
  const productName = "Buzdolabı"

  return (
    
      <div>
        <Product productName="Ayakkabı" price= {3200}/>
        <Product productName="Pantolon" price= {850}/>
        <Product productName={productName} price= {50}/>
      </div>
    
  )
}

export default App

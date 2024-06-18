import { useState, useEffect, useContext } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './global.scss'

import { ProductProvider } from './contexts/ProductContext';

import Footer from './components/Footer';
import ProductPage from './pages/Product';

function App() {
  return (
    <>
    <ProductProvider>
      <ProductPage />
      <Footer />
    </ProductProvider>
    </>
  )
}

export default App

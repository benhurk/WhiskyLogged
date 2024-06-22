import 'bootstrap-icons/font/bootstrap-icons.css';
import './global.scss'

import { Route, Routes } from 'react-router-dom';

import { ProductProvider } from './contexts/ProductContext';

import HomePage from './pages/Home';
import ProductPage from './pages/Product';

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/whisky/:name' element={<ProductPage />} />
      </Routes>
    </ProductProvider>
  )
}

export default App

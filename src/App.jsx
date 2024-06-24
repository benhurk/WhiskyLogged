import 'bootstrap-icons/font/bootstrap-icons.css';
import './global.scss'

import { Route, Routes } from 'react-router-dom';

import { ProductProvider } from './contexts/ProductContext';
import { SearchProvider } from './contexts/SearchContext';
import { FilterProvider } from './contexts/FilterContext';

import HomePage from './pages/Home';
import ProductPage from './pages/Product';

function App() {
  return (
    <ProductProvider>
      <SearchProvider><FilterProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/whisky/:name' element={<ProductPage />} />
        </Routes>
      </FilterProvider></SearchProvider>
    </ProductProvider>
  )
}

export default App

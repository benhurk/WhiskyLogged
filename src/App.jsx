import 'bootstrap-icons/font/bootstrap-icons.css';
import './global.scss'

import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { ProductProvider } from './contexts/ProductContext';
import { SearchProvider } from './contexts/SearchContext';
import { FilterProvider } from './contexts/FilterContext';

import HomePage from './pages/Home';
import ProductPage from './pages/Product';

function App() {
  const location = useLocation();

  return (
    <ProductProvider>
      <SearchProvider><FilterProvider>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<HomePage />} />
            <Route path='/whisky/:name' element={<ProductPage />} />
          </Routes>
        </AnimatePresence>
      </FilterProvider></SearchProvider>
    </ProductProvider>
  )
}

export default App

import 'bootstrap-icons/font/bootstrap-icons.css';
import './global.scss'

import { ProductProvider } from './contexts/ProductContext';
import { SearchProvider } from './contexts/SearchContext';

import Footer from './components/Footer';
import ProductPage from './pages/Product';
import HomePage from './pages/Home';

function App() {
  return (
    <>
    <ProductProvider>
      <SearchProvider>
        <HomePage />
      </SearchProvider>
      <Footer />
    </ProductProvider>
    </>
  )
}

export default App

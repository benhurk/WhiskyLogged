import { useState, useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './global.scss'

import ProductPage from './pages/Product';

function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(undefined);

  const pageTheme = (product) => {
    const rootEl = document.querySelector(':root');
    rootEl.style.setProperty('--theme-color', product.themeColor);
  }

  useEffect(() => {
    fetch('./catalog.json')
        .then(res => res.json())
        .then(catalog => {  setProducts(catalog); setCurrentProduct(catalog[0], pageTheme(catalog[0]));  })
        .catch(err => console.error(err))
  }, []);

  const selectProduct = (e) => {
    const currentItem = products.filter(item => item.name.includes(e.target.dataset.name));
    setCurrentProduct(currentItem[0], pageTheme(currentItem[0]));
  }

  return (
    <>
    {
      currentProduct
      ?
      <ProductPage getProducts={products} getCurrentProduct={currentProduct} selectCurrentProduct={selectProduct} />
      :
      <span>bruh</span>
    }
    </>
  )
}

export default App

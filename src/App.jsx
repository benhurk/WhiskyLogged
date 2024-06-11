import { useState, useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './global.scss'

import Header from './containers/Header';
import Content from './containers/Content';

function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(undefined);

  useEffect(() => {
    fetch('./catalog.json')
        .then(res => res.json())
        .then(catalog => {  setProducts(catalog); setCurrentProduct(catalog[0]);  })
        .catch(err => console.error(err))
  }, []);

  const selectProduct = (e) => {
    const currentItem = products.filter(item => item.name.includes(e.target.dataset.name));
    setCurrentProduct(currentItem[0]);
  }

  return (
    <>
    <div className="container">
      <Header getProducts={products} getCurrentProduct={currentProduct} selectCurrentProduct={selectProduct} />
      {currentProduct ? <Content getCurrentProduct={currentProduct} /> : <span>alo</span>}
    </div>
    </>
  )
}

export default App

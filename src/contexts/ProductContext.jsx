import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
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
        <ProductContext.Provider value={{products, currentProduct, selectProduct}}>{children}</ProductContext.Provider>
    )
}
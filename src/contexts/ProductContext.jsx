import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const pageTheme = (product) => {
        const rootEl = document.querySelector(':root');
        rootEl.style.setProperty('--theme-color', product.themeColor);
    }

    useEffect(() => {
        fetch('../catalog.json')
            .then(res => res.json())
            .then(catalog => {  
                setProducts(catalog); 
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
    )
}
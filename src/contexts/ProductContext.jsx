import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(catalog => {  
                setProducts(catalog.sort((a, b) => ((b.rating.nose + b.rating.palate + b.rating.cost) / 3) - ((a.rating.nose + a.rating.palate + a.rating.cost) / 3))); 
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
    )
}
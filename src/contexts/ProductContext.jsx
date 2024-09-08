import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://whiskylogged-api.vercel.app/products')
            .then(res => {
                return res.json();
            })
            .then(catalog => {  
                setIsLoading(false);
                setProducts(catalog.sort((a, b) => ((b.rating.nose + b.rating.palate + b.rating.cost) / 3) - ((a.rating.nose + a.rating.palate + a.rating.cost) / 3)));
            })
            .catch(err => { 
                setIsLoading(false);
                console.error(err);
            })
    }, []);

    return (
        <ProductContext.Provider value={{products, isLoading}}>{children}</ProductContext.Provider>
    )
}
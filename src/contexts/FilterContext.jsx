import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [typeFilter, setTypeFilter] = useState('');
    
    const handleTypeSelect = (e) => {   setTypeFilter(e.target.value);  }

    return (
        <FilterContext.Provider value={{typeFilter, handleTypeSelect}}>{children}</FilterContext.Provider>
    )
}
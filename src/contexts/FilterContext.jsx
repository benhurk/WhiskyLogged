import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [typeFilter, setTypeFilter] = useState('');
    
    // const handleTypeSelect = (e) => {   setTypeFilter(e.target.value);  }
    const handleTypeSelect = (e) => {   setTypeFilter(e.target.dataset.type);  }

    return (
        <FilterContext.Provider value={{typeFilter, setTypeFilter, handleTypeSelect}}>{children}</FilterContext.Provider>
    )
}
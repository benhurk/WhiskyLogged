import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchFor, setSearchFor] = useState('');

    const handleInput = (e) => {    setSearchFor(e.target.value);   }

    return (
        <SearchContext.Provider value={{searchFor, setSearchFor, handleInput}}>{children}</SearchContext.Provider>
    )
}
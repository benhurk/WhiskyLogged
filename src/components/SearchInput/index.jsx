import './styles.scss';

import { useContext, useRef } from "react";
import { SearchContext } from "../../contexts/SearchContext";

export default function SearchInput() {
    const {searchFor, setSearchFor, handleInput} = useContext(SearchContext);

    const inputRef = useRef();

    const clearInput = () => {
        inputRef.current.value = '';
        setSearchFor('');
    }

    return (
        <>
        <input ref={inputRef} value={searchFor} type='text' className='input' placeholder='Buscar' onChange={handleInput} />
        <button type='button' className='btn bi bi-x-lg' onClick={clearInput}></button>
        </>
    )
}
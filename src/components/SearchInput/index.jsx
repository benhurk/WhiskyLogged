import './styles.scss';

import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

export default function SearchInput({setRef, icon, handleBtn}) {
    const {searchFor, handleInput} = useContext(SearchContext);

    return (
        <>
        <input ref={setRef} value={searchFor} type='text' className='input' placeholder='Buscar' onChange={handleInput} />
        <button type='button' className={`btn ${icon}`} onClick={handleBtn}></button>
        </>
    )
}
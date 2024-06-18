import { useEffect, useState, useRef, useContext } from 'react';
import './styles.scss';

import { ProductContext } from '../../../../contexts/ProductContext';

export default function HeaderCatalog() {
    const {products, currentProduct, selectProduct} = useContext(ProductContext);

    const [searchFor, setSearchFor] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const inputRef = useRef();
    const wraperRef = useRef();

    const handleInput = (e) => {    setSearchFor(e.target.value);   }

    const handleTypeSelect = (e) => {   setTypeFilter(e.target.value);  }

    const handleScrollClick = (e) => {
        const el = e.target;

        if (el.classList.value.includes("--left")) {
            wraperRef.current.scrollBy({left: -500, behavior: 'smooth'});
        } else if (el.classList.value.includes("--right")) {
            wraperRef.current.scrollBy({left: 500, behavior: 'smooth'});
        }
    }

    const clearInput = () => {
        inputRef.current.value = '';
        setSearchFor('');
    }

    const productTypes = [...new Set(products.map(item => item.type))]

    const searchedProducts = products.filter(item => {
        return item.name.toLowerCase().includes(searchFor.toLowerCase()) && item.type.includes(typeFilter);
    })

    return (
        <div className='header_catalog'>
            <div className='header_catalog__options'>
                <div className='header_catalog__options-type'>
                    <span className='header_catalog__options-type_title'>{typeFilter.length > 0 ? typeFilter : 'Selecionar tipo'}</span>
                    <select value={typeFilter} onChange={handleTypeSelect}>
                        <option value=''>Todos</option>
                        {productTypes.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <form className='header_catalog__options-search'>
                    <input ref={inputRef} value={searchFor} type='text' className='header_catalog__options-search_input' placeholder='Buscar' onChange={handleInput} />
                    <button type='button' className='header_catalog__options-search_btn bi bi-x-lg' onClick={clearInput}></button>
                </form>
            </div>
            <div className='header_catalog__products'>
                <div className='header_catalog__products_wraper' ref={wraperRef}>
                    {searchedProducts.length > 0
                        ?
                        searchedProducts.map(item => (
                            <div key={item.name} data-name={item.name} className={`header_catalog__products-item ${item.name === currentProduct.name ? 'current' : ''}`} onClick={selectProduct}>
                                <img src={item.img} alt="Product Image" />
                                <div className='header_catalog__products-item_name'>
                                    <h3 className='header_catalog__products-item_name-main'>{item.name.split(' - ')[0]}</h3>
                                    <h4 className='header_catalog__products-item_name-sub'>{item.name.split(' - ')[1]}</h4>
                                </div>
                            </div>
                        ))
                        :
                        <span className='header_catalog__products-none'>Busca não encontrada.</span>
                    }
                </div>
                <div className='header_catalog__products-buttons'>
                    <button type='button' className='header_catalog__products-buttons--left' onClick={handleScrollClick}></button>
                    <button type='button' className='header_catalog__products-buttons--right' onClick={handleScrollClick}></button>
                </div>
            </div>
        </div>
    )
}
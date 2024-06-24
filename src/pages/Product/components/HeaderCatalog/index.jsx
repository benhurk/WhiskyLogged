import { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import { ProductContext } from '../../../../contexts/ProductContext';
import { SearchContext } from '../../../../contexts/SearchContext';
import { FilterContext } from '../../../../contexts/FilterContext';

import { filterItems } from '../../../../scripts/filterItems';

import SearchInput from '../../../../components/SearchInput';
import TypeSelector from '../../../../components/TypeSelector';

export default function HeaderCatalog({currentProduct}) {
    const {products} = useContext(ProductContext);
    const {searchFor} = useContext(SearchContext);
    const {typeFilter} = useContext(FilterContext);

    const wraperRef = useRef();

    const handleScrollClick = (e) => {
        const el = e.target;

        if (el.classList.value.includes("--left")) {
            wraperRef.current.scrollBy({left: -500, behavior: 'smooth'});
        } else if (el.classList.value.includes("--right")) {
            wraperRef.current.scrollBy({left: 500, behavior: 'smooth'});
        }
    }

    const searchedProducts = filterItems(products, searchFor, typeFilter);

    return (
        <div className='header_catalog'>
            <div className='header_catalog__options'>
                <SearchInput />
                <TypeSelector />
            </div>
            <div className='header_catalog__products'>
                <div className='header_catalog__products_wraper' ref={wraperRef}>
                    {searchedProducts.length > 0
                        ?
                        searchedProducts.map(item => (
                            <Link to={`/whisky/${item.name.replace(/-|\s/g,"")}`} key={item.name} className={`header_catalog__products-item ${currentProduct && (item.name === currentProduct.name) ? 'current' : ''}`}>
                                <img className='header_catalog__products-item_img' src={item.img} alt={item.name} />
                                <div className='header_catalog__products-item_name'>
                                    <h3 className='header_catalog__products-item_name-main'>{item.name.split(' - ')[0]}</h3>
                                    <h4 className='header_catalog__products-item_name-sub'>{item.name.split(' - ')[1]}</h4>
                                </div>
                            </Link>
                        ))
                        :
                        <span className='header_catalog__products-none'>Busca não encontrada.</span>
                    }
                </div>
                <div className='header_catalog__products-buttons'>
                    <button type='button' className='header_catalog__products-buttons--left bi bi-chevron-left' onClick={handleScrollClick}></button>
                    <button type='button' className='header_catalog__products-buttons--right bi bi-chevron-right' onClick={handleScrollClick}></button>
                </div>
            </div>
        </div>
    )
}
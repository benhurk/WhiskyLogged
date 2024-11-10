import './styles.scss';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ProductContext } from '../../contexts/ProductContext';
import { SearchContext } from '../../contexts/SearchContext';
import { FilterContext } from '../../contexts/FilterContext';

import { renderStarRatings } from '../../scripts/renderStarRatings';
import { filterItems } from '../../scripts/filterItems';

import Loader from '../Loader';

export default function PageCatalog({sortBy}) {
    const {products, isLoading} = useContext(ProductContext);
    const {searchFor} = useContext(SearchContext);
    const {typeFilter} = useContext(FilterContext);

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        setPageNumber(0);
    }, [typeFilter, searchFor]);

    const searchedProducts = filterItems(products, searchFor, typeFilter);

    const sortedProducts = searchedProducts.sort((a, b) => {
        return (
            sortBy
            ?
            ((b.rating.nose + b.rating.palate + b.rating.cost) / 3) - ((a.rating.nose + a.rating.palate + a.rating.cost) / 3)
            :
            ((a.rating.nose + a.rating.palate + a.rating.cost) / 3) - ((b.rating.nose + b.rating.palate + b.rating.cost) / 3)
        )
    })

    const productsPerPage = 6;
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
    const pagesVisited = pageNumber * productsPerPage;

    const displayProducts = sortedProducts.slice(pagesVisited, pagesVisited + productsPerPage);

    function renderPaginationButtons(totalPages) {
        let buttons = [];

        for (let i = 0; i < totalPages; i++) {
            buttons.push(<button key={i} type='button' className={`page_catalog__pagination_btn--num ${i === pageNumber ? 'current' : ''}`} onClick={() => setPageNumber(i)}>{i + 1}</button>);
        }

        return buttons;
    }

    function openTooltip(product) {
        const tooltipEl = document.querySelector(`[data-tooltip="${product}"]`);
        tooltipEl.classList.add('open');

        const rect = tooltipEl.getBoundingClientRect();

        if (rect.x + rect.width > window.innerWidth) {
            tooltipEl.style.right = '100%';
        } else {
            tooltipEl.style.left = '100%';
        }
    }

    function closeTooltip(product) {
        const tooltipEl = document.querySelector(`[data-tooltip="${product}"]`);
        tooltipEl.classList.remove('open');

        tooltipEl.style.right = '';
        tooltipEl.style.left = '';
    }

    if (isLoading) {
        return <Loader />
    } else {
        return (
            <section className='page_catalog'>
                <div className='container'>
                    {
                        searchedProducts.length > 0
                        ?
                        <ul className='page_catalog__products'>
                        {
                            displayProducts.map((item) => (
                                <li 
                                key={item.name} data-name={item.name} className='page_catalog__products-card'
                                onMouseEnter={() => openTooltip(item.name)} onMouseLeave={() => closeTooltip(item.name)}
                                >
                                    <Link to={`/whisky/${item.name.replace(/-|\s/g,"")}`}>
                                        <div className='page_catalog__products-card_img'>
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <div className='page_catalog__products-card_title'>
                                            <h3 className='page_catalog__products-card_title-name'>{item.name}</h3>
                                            <div className='page_catalog__products-card_title-rating'>
                                                {renderStarRatings((item.rating.nose + item.rating.palate + item.rating.cost) / 3)}
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='page_catalog__products-card_tooltip' data-tooltip={item.name}>
                                        <div className='page_catalog__products-card_tooltip-img'><img src={item.picture} alt={item.name} /></div>
                                        <p>{item.taste.description}</p>
                                    </div>
                                </li>
                            ))
                        }
                        </ul>
                        :
                        <span className='page_catalog__products-none'>Busca não encontrada.</span>
                    }
                    <div className='page_catalog__pagination'>
                        <div className='page_catalog__pagination_buttons'>
                            <button type='button' className='page_catalog__pagination_btn--arrow bi bi-chevron-left' disabled={pageNumber === 0 ? true : false} onClick={() => setPageNumber(pageNumber - 1)} />
                            {renderPaginationButtons(totalPages)}
                            <button type='button' className='page_catalog__pagination_btn--arrow bi bi-chevron-right' disabled={pageNumber === totalPages - 1 ? true : false} onClick={() => setPageNumber(pageNumber + 1)} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
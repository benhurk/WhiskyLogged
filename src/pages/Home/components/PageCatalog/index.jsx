import './styles.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProductContext } from '../../../../contexts/ProductContext';
import { SearchContext } from '../../../../contexts/SearchContext';
import { FilterContext } from '../../../../contexts/FilterContext';

import { renderStarRatings } from '../../../../scripts/renderStarRatings';
import { filterItems } from '../../../../scripts/filterItems';

import Loader from '../../../../components/Loader';

export default function PageCatalog({sortBy}) {
    const {products, isLoading} = useContext(ProductContext);
    const {searchFor} = useContext(SearchContext);
    const {typeFilter} = useContext(FilterContext);
    
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

    if (isLoading) {
        return <Loader />
    } else {
        return (
            <section className='page_catalog'>
                {
                    searchedProducts.length > 0
                    ?
                    <ul className='page_catalog__products'>
                    {
                        sortedProducts.map((item) => (
                            <li key={item.name} data-name={item.name} className='page_catalog__products-card'>
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
                            </li>
                        ))
                    }
                    </ul>
                    :
                    <span className='page_catalog__products-none'>Busca não encontrada.</span>
                }
            </section>
        )
    }
}
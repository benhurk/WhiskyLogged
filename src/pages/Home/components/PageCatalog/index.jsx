import './styles.scss';
import { useContext } from 'react';

import { renderStarRatings } from '../../../../scripts/renderStarRatings';
import { ProductContext } from '../../../../contexts/ProductContext';

export default function PageCatalog() {
    const {products, currentProduct, selectProduct} = useContext(ProductContext);

    return (
        <section className='page_catalog'>
            <ul className='page_catalog__products'>
                {
                    products.map(item => (
                        <li key={item.name} data-name={item.name} className='page_catalog__products-card' onClick={selectProduct}>
                            <div className='page_catalog__products-card_img'>
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className='page_catalog__products-card_title'>
                                <h3 className='page_catalog__products-card_title-name'>{item.name}</h3>
                                <div className='page_catalog__products-card_title-rating'>
                                    {renderStarRatings((item.rating.nose + item.rating.palate + item.rating.cost) / 3)}
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
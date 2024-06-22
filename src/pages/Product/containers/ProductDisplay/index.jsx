import { useRef, useContext } from 'react';
import './styles.scss';

import { renderStarRatings } from '../../../../scripts/renderStarRatings';

export default function Product({currentProduct}) {
    const ratingExpand = useRef();

    return(
        <div className='product_display'>
            <div className='product_display__rating'>
                <div className='product_display__rating--main' onMouseOver={() => ratingExpand.current.classList.add('open')} onMouseOut={() => ratingExpand.current.classList.remove('open')}>
                    {renderStarRatings((currentProduct.rating.nose + currentProduct.rating.palate + currentProduct.rating.cost) / 3)}
                </div>
                <ul className='product_display__rating--sub' ref={ratingExpand}>
                    <div className='product_display__rating--sub_bg'></div>
                    <li className='product_display__rating--sub_item'>
                        <span className='product_display__rating--sub_item-title'>Olfato:</span>
                        <div className='product_display__rating--sub_item-stars'>
                            {renderStarRatings(currentProduct.rating.nose)}
                        </div>
                    </li>
                    <li className='product_display__rating--sub_item'>
                        <span className='product_display__rating--sub_item-title'>Paladar:</span>
                        <div className='product_display__rating--sub_item-stars'>
                            {renderStarRatings(currentProduct.rating.palate)}
                        </div>
                    </li>
                    <li className='product_display__rating--sub_item'>
                        <span className='product_display__rating--sub_item-title'>Custo-Benefício:</span>
                        <div className='product_display__rating--sub_item-stars'>
                            {renderStarRatings(currentProduct.rating.cost)}
                        </div>
                    </li>
                </ul>
            </div>
            <ul className='product_display__content'>
                <li className='product_display__content-info'>
                    <ul className='product_display__content-info_name'>
                        <li className='product_display__content-info--main'>Rótulo</li>
                        <li className='product_display__content-info--sub'>{currentProduct.name.split('-')}</li>
                    </ul>
                    <ul className='product_display__content-info_region'>
                        <li className='product_display__content-info--main'>Região</li>
                        <li className='product_display__content-info--sub'>{currentProduct.region}</li>
                    </ul>
                </li>
                <li className='product_display__content-image'>
                    <img src={currentProduct.img} alt={currentProduct.name}></img>
                </li>
                <li className='product_display__content-info'>
                    <ul className='product_display__content-info_type'>
                        <li className='product_display__content-info--main'>Tipo</li>
                        <li className='product_display__content-info--sub'>{currentProduct.type}</li>
                    </ul>
                    <ul className='product_display__content-info_age'>
                        <li className='product_display__content-info--main'>Idade</li>
                        <li className='product_display__content-info--sub'>{currentProduct.age}</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
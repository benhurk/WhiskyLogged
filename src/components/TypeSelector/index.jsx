import './styles.scss';
import { useContext, useEffect } from 'react';

import { ProductContext } from '../../contexts/ProductContext';
import { FilterContext } from '../../contexts/FilterContext';

export default function TypeSelector() {
    const {products} = useContext(ProductContext);
    const {typeFilter, handleTypeSelect} = useContext(FilterContext);

    useEffect(() => {
        const options = document.querySelectorAll('.type_list__item');

        options.forEach(element => {
            if (element.dataset.type === typeFilter) {
                element.classList.add('selected');
                element.querySelector('.bi').classList.remove('bi-circle');
                element.querySelector('.bi').classList.add('bi-circle-fill');
            } else {
                element.classList.remove('selected');
                element.querySelector('.bi').classList.remove('bi-circle-fill');
                element.querySelector('.bi').classList.add('bi-circle');
            }
        });
    }, [typeFilter]);

    const productTypes = [...new Set(products.map(item => item.type))];

    return (
        <ul className='type_list'>
            <li className='type_list__item selected' data-type={''} onClick={handleTypeSelect}><i className="bi bi-circle"></i> Todos</li>
            {
                productTypes.map(item => (
                    <li key={item} className='type_list__item' data-type={item} onClick={handleTypeSelect}><i className="bi bi-circle"></i> {item}</li>
                ))
            }
        </ul>
    )
}
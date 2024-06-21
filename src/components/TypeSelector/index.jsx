import './styles.scss';
import { useContext } from 'react';

import { ProductContext } from '../../contexts/ProductContext';
import { FilterContext } from '../../contexts/FilterContext';

export default function TypeSelector({parentClass}) {
    const {products} = useContext(ProductContext);
    const {handleTypeSelect} = useContext(FilterContext);

    const productTypes = [...new Set(products.map(item => item.type))];

    const handleClick = (e) => {
        handleTypeSelect(e);

        const options = document.querySelectorAll('.type_list__item');
        const icon = e.target.querySelector('.bi');

        options.forEach(element => {
            element.classList.remove('selected');

            if (!element.classList.contains(['selected', 'bi-circle'])) {
                element.querySelector('.bi').classList.remove('bi-circle-fill');
                element.querySelector('.bi').classList.add('bi-circle');
            }
        });

        e.target.classList.add('selected');
        
        icon.classList.remove('bi-circle');
        icon.classList.add('bi-circle-fill');
    }

    return (
        <ul className='type_list'>
            <li className='type_list__item selected' data-type={''} onClick={handleClick}><i className="bi bi-circle-fill"></i> Todos</li>
            {
                productTypes.map(item => (
                    <li key={item} className='type_list__item' data-type={item} onClick={handleClick}><i className="bi bi-circle"></i> {item}</li>
                ))
            }
        </ul>
    )
}
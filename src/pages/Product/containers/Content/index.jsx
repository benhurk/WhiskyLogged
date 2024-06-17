import './styles.css';

import ProductDisplay from '../../components/ProductDisplay';
import ProductContent from '../../components/ProductContent';

export default function Content({ getCurrentProduct }) {
    return (
        <main className='content'>
            <ProductDisplay currentProduct={getCurrentProduct} />
            <ProductContent currentProduct={getCurrentProduct} />
        </main>
    )
}
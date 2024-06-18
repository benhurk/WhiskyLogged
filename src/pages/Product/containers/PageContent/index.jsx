import './styles.css';

import ProductDisplay from '../../components/ProductDisplay';
import ProductInfo from '../../components/ProductInfo';

export default function PageContent() {
    return (
        <main className='content'>
            <ProductDisplay />
            <ProductInfo />
        </main>
    )
}
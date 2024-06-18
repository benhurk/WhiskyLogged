import './styles.css';

import ProductDisplay from '../../components/ProductDisplay';
import ProductContent from '../../components/ProductContent';

export default function Content() {
    return (
        <main className='content'>
            <ProductDisplay />
            <ProductContent />
        </main>
    )
}
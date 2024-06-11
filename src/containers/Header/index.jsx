import './styles.scss';
import HeaderCatalog from '../../components/HeaderCatalog';

export default function Header({ getProducts, selectCurrentProduct, getCurrentProduct }) {
    return (
        <header className='header'>
            <h1 className='header_brand'>My<strong>Whisky</strong>Space</h1>
            <HeaderCatalog products={getProducts} setCurrentProduct={selectCurrentProduct} currentProduct={getCurrentProduct} />
        </header>
    )
}
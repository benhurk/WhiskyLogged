import './styles.scss';
import HeaderCatalog from '../../components/HeaderCatalog';

export default function Header({ getProducts, selectCurrentProduct, getCurrentProduct }) {
    return (
        <header className='header'>
            <h1 className='header_brand'>My<strong>Whisky</strong>Space</h1>
            <div className='container'>
                <HeaderCatalog products={getProducts} setCurrentProduct={selectCurrentProduct} currentProduct={getCurrentProduct} />
            </div>
        </header>
    )
}
import Header from '../../components/Header';
import HeaderCatalog from './components/HeaderCatalog';
import ProductDisplay from './containers/ProductDisplay';
import ProductInfo from './containers/ProductInfo';

import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';


export default function ProductPage() {
    const {currentProduct} = useContext(ProductContext);

    return (
        <>
        {
            currentProduct
            ?
            <>
            <Header>
                <div className='container'>
                    <HeaderCatalog />
                </div>
            </Header>
            <main className='content'>
                <div className="container">
                    <ProductDisplay />
                    <ProductInfo />
                </div>
            </main>
            </>
            :
            <span>alo</span>
        }
        </>
    )
}
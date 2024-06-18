import Header from './containers/Header';
import Content from './containers/Content';
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
            <Header />
            <div className="container">
                <Content />
            </div>
            </>
            :
            <span>alo</span>
        }
        </>
    )
}
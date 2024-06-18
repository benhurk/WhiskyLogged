import Header from '../../components/Header';
import HeaderContent from './containers/HeaderContent';
import PageContent from './containers/PageContent';

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
                <HeaderContent />
            </Header>
            <div className="container">
                <PageContent />
            </div>
            </>
            :
            <span>alo</span>
        }
        </>
    )
}
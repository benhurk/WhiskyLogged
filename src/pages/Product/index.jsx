import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProductContext } from '../../contexts/ProductContext';

import { setPageTheme } from '../../scripts/pageTheme';
import { scrollTop } from '../../scripts/scrollTop';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderCatalog from '../../components/HeaderCatalog';
import Loader from '../../components/Loader';

import ProductDisplay from './containers/ProductDisplay';
import ProductInfo from './containers/ProductInfo';
import ProductNotFound from './containers/ProductNotFound';

export default function ProductPage() {
    const { products, isLoading } = useContext(ProductContext);
    const { name } = useParams();

    const currentProduct = products.filter(item => item.name.replace(/-|\s/g, "") === (name))[0];
    const noProduct = () => {
        if (isLoading) { return <Loader /> } else { return <ProductNotFound /> }
    }

    setPageTheme(currentProduct);
    scrollTop(currentProduct);

    return (
        <>
            <Header>
                <HeaderCatalog currentProduct={currentProduct} />
            </Header>
            <main className='content'>
                <div className="container">
                    {
                        currentProduct
                            ?
                            <>
                                <ProductDisplay currentProduct={currentProduct} />
                                <ProductInfo currentProduct={currentProduct} />
                            </>
                            :
                            noProduct()
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}
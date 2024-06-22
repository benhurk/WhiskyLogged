import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProductContext } from '../../contexts/ProductContext';
import { SearchProvider } from '../../contexts/SearchContext';
import { FilterProvider } from '../../contexts/FilterContext';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import HeaderCatalog from './components/HeaderCatalog';
import ProductDisplay from './containers/ProductDisplay';
import ProductInfo from './containers/ProductInfo';


export default function ProductPage() {
    const {products} = useContext(ProductContext);

    const {name} = useParams();

    const currentProduct = products.filter(item => item.name.replace(/-|\s/g,"").includes(name))[0];

    return (
        <>
            <SearchProvider><FilterProvider>
                {
                    currentProduct
                    ?
                    <>
                    <Header>
                        <div className='container'>
                            <HeaderCatalog currentProduct={currentProduct} />
                        </div>
                    </Header>
                    <main className='content'>
                        <div className="container">
                            <ProductDisplay currentProduct={currentProduct} />
                            <ProductInfo currentProduct={currentProduct}/>
                        </div>
                    </main>
                    </>
                    :
                    <span>que lixo</span>
                }
            </FilterProvider></SearchProvider>
            <Footer />
        </>
    )
}
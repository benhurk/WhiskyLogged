import Header from './containers/Header';
import Content from './containers/Content';
import Footer from './containers/Footer';

export default function ProductPage({ getProducts, selectCurrentProduct, getCurrentProduct }) {
    return (
        <>
        <Header getProducts={getProducts} getCurrentProduct={getCurrentProduct} selectCurrentProduct={selectCurrentProduct} />
        <div className="container">
            <Content getCurrentProduct={getCurrentProduct} />
        </div>
        <Footer />
        </>
    )
}
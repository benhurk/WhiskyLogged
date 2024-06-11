import './styles.scss';

export default function ProductContent({ currentProduct }) {
    return (
        <section className='product_content'>
            <h2 className='product_content--title'>{currentProduct.name} <i className="bi bi-body-text"></i></h2>

            <div className='product_content__inner'>
                <div className='product_content__inner_img'>
                    <img src={currentProduct.picture} alt={currentProduct.name}></img>
                </div>
                <div className='product_content__inner-text_container'>
                    <div className='product_content__inner-text'>
                        <h3 className='product_content__inner-text--title'>Informações Técnicas</h3>
                        <p className='product_content__inner-text--p'>{currentProduct.info}</p>
                    </div>
                    <div className='product_content__inner-text'>
                        <h3 className='product_content__inner-text--title'>Sabores e Aromas</h3>
                        <p className='product_content__inner-text--p'>{currentProduct.taste.description}</p>
                        <div className='product_content__inner-text_sub'>
                            <h4 className='product_content__inner-text_sub--title'>Olfato:</h4>
                            <p className='product_content__inner-text_sub--p'>{currentProduct.taste.nose}</p>
                        </div>
                        <div className='product_content__inner-text_sub'>
                            <h4 className='product_content__inner-text_sub--title'>Paladar:</h4>
                            <p className='product_content__inner-text_sub--p'>{currentProduct.taste.palate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
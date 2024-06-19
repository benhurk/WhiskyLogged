import { useEffect, useRef, useContext } from 'react';
import './styles.scss';

import { ProductContext } from '../../../../contexts/ProductContext';

export default function ProductInfo() {
    const {currentProduct} = useContext(ProductContext);

    const contentAnimRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('anim');
                } 
            });
        }, {
            threshold: .5
        });

        observer.observe(contentAnimRef.current);
        return () => observer.disconnect();
    }, [])

    useEffect(() => { contentAnimRef.current.classList.remove('anim') }, [currentProduct]);

    return (
        <section className='product_content'>
            <h2 className='product_content--title'>{currentProduct.name} <i className="bi bi-body-text"></i></h2>

            <div className='product_content__inner' ref={contentAnimRef}>
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
                            <p className='product_content__inner-text_sub--p'>
                                <strong className='product_content__inner-text_sub--p_title'>Olfato:</strong>
                                {currentProduct.taste.nose}
                            </p>
                        </div>
                        <div className='product_content__inner-text_sub'>
                            <p className='product_content__inner-text_sub--p'>
                                <strong className='product_content__inner-text_sub--p_title'>Paladar:</strong>
                                {currentProduct.taste.palate}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
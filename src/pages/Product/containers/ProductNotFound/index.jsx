import './styles.scss';

export default function ProductNotFound() {
    return (
        <section className='notfound'>
            <h2 className='notfound_title'>Whisky não encontrado.</h2>
            <span className='notfound_disclaimer'>Esse rótulo não faz parte da coleção, ou o nome na url está incorreto.</span>
            <img className='notfound_img' src='../src/assets/icons/NotFound.png' />
        </section>
    )
}
import './styles.scss';

export default function ProductNotFound() {
    return (
        <section className='notfound'>
            <h2 className='notfound_title'>Whisky não encontrado.</h2>
            <img className='notfound_img' src='../icons/NotFound.png' />
        </section>
    )
}
import './styles.scss';

export default function Footer() {
    const scrollToTop = () => {
        document.body.scrollTo({top: 0, behavior: 'smooth'});
        document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <footer className='footer'>
            <div className="container">
                <button className='footer_pageup bi bi-chevron-double-up' onClick={scrollToTop}>PageUp</button>
            </div>
        </footer>
    )
}
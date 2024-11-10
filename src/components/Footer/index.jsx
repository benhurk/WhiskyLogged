import { scrollTop } from '../../scripts/scrollTop';
import './styles.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <button className='footer_pageup bi bi-chevron-double-up' onClick={scrollTop}></button>
                <p className='footer_info'>WhiskyLogged por Ben Hur Kuchler</p>
            </div>
        </footer>
    )
}
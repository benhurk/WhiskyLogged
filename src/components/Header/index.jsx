import { Link } from 'react-router-dom';
import './styles.scss';

export default function Header({children}) {
    return (
        <header className='header'>
            <h1 className='header_brand'>
                <Link to='/'>My<strong>Whisky</strong>Space</Link>
            </h1>
            {children}
        </header>
    )
}
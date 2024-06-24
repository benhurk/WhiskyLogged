import { Link } from 'react-router-dom';
import './styles.scss';

export default function Header({children}) {
    return (
        <header className='header'>
            <h1 className='header_brand'>
                <Link to='/'><strong>Whisky</strong>Logged</Link>
            </h1>
            <div className="container">
                {children}
            </div>
        </header>
    )
}
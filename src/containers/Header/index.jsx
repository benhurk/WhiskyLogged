import './styles.scss';
import HeaderCatalog from '../../components/HeaderCatalog';

export default function Header() {
    return (
        <header className='header'>
            <h1 className='header_brand'>My<strong>Whisky</strong>Space</h1>
            <HeaderCatalog />
        </header>
    )
}
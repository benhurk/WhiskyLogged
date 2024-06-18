import './styles.scss';

export default function Header({children}) {
    return (
        <header className='header'>
            <h1 className='header_brand'>My<strong>Whisky</strong>Space</h1>
            {children}
        </header>
    )
}
import './styles.scss';

import SearchInput from "../../../../components/SearchInput";

export default function HeaderContent() {

    return (
        <div className="container">
            <section className='header__options'>
                <form className='header__options-search'>
                        <SearchInput icon={'bi bi-search'} />
                </form>
                <ul className='header__options-type'>
                    <li className='header__options-type_item'><i className="bi bi-circle"></i> Single Malt</li>
                    <li className='header__options-type_item'><i className="bi bi-circle"></i> Blend</li>
                    <li className='header__options-type_item'><i className="bi bi-circle"></i> Bourbon</li>
                </ul>
            </section>
        </div>
    )
}
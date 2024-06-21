import './styles.scss';

import SearchInput from "../../../../components/SearchInput";
import TypeSelector from '../../../../components/TypeSelector';

export default function HeaderContent() {

    return (
        <div className="container">
            <section className='header__options'>
                <form className='header__options-search'>
                        <SearchInput icon={'bi bi-search'} />
                </form>
                <TypeSelector />
            </section>
        </div>
    )
}
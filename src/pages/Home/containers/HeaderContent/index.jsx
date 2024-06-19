import './styles.scss';

import SearchInput from "../../../../components/SearchInput";

export default function HeaderContent() {
    return (
        <div className="container">
            <form className="header_search">
                <SearchInput icon={'bi bi-search'} />
            </form>
        </div>
    )
}
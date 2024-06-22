import './styles.scss';

import { SearchProvider } from '../../contexts/SearchContext';
import { FilterProvider } from '../../contexts/FilterContext';

import Header from "../../components/Header";
import Footer from '../../components/Footer';
import SearchInput from "../../components/SearchInput";
import TypeSelector from "../../components/TypeSelector";

import PageCatalog from "./components/PageCatalog";

export default function HomePage() {
    return (
        <>
            <SearchProvider><FilterProvider>
                <Header>
                    <section className='header__options'>
                        <SearchInput icon={'bi bi-search'} />
                        <TypeSelector />
                    </section>
                </Header>
                <main>
                    <div className="container">
                        <PageCatalog />
                    </div>
                </main>
            </FilterProvider></SearchProvider>
            <Footer />
        </>
    )
}
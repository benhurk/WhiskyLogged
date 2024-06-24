import './styles.scss';

import { setPageTheme } from '../../scripts/pageTheme';
import { scrollTop } from '../../scripts/scrollTop';

import Header from "../../components/Header";
import Footer from '../../components/Footer';
import SearchInput from "../../components/SearchInput";
import TypeSelector from "../../components/TypeSelector";

import PageCatalog from "./components/PageCatalog";

export default function HomePage() {
    setPageTheme();
    scrollTop();

    return (
        <>
            <Header>
                <section className='header__options'>
                    <SearchInput />
                    <TypeSelector />
                </section>
            </Header>
            <main>
                <div className="container">
                    <PageCatalog />
                </div>
            </main>
            <Footer />
        </>
    )
}
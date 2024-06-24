import './styles.scss';
import { useState } from 'react';

import { setPageTheme } from '../../scripts/pageTheme';
import { scrollTop } from '../../scripts/scrollTop';

import Header from "../../components/Header";
import Footer from '../../components/Footer';
import SearchInput from "../../components/SearchInput";
import TypeSelector from "../../components/TypeSelector";

import PageCatalog from "./components/PageCatalog";

export default function HomePage() {
    const [sortBy, setSortBy] = useState(true);

    setPageTheme();
    scrollTop();

    return (
        <>
            <Header>
                <section className='header__options'>
                    <SearchInput />
                    <TypeSelector />
                    <button className='header__options-sort bi bi bi-arrow-down-up' onClick={() => setSortBy(!sortBy)}> Avaliação</button>
                </section>
            </Header>
            <main>
                <div className="container">
                    <PageCatalog sortBy={sortBy} />
                </div>
            </main>
            <Footer />
        </>
    )
}
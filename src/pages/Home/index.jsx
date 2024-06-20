import Header from "../../components/Header";
import HeaderContent from "./containers/HeaderContent";
import PageCatalog from "./components/PageCatalog";
import { SearchProvider } from "../../contexts/SearchContext";
import { FilterProvider } from "../../contexts/FilterContext";

export default function HomePage() {
    return (
        <>
            <FilterProvider>
                <Header>
                    <HeaderContent />
                </Header>
                <main>
                    <div className="container">
                        <PageCatalog />
                    </div>
                </main>
            </FilterProvider>
        </>
    )
}
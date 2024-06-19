import Header from "../../components/Header";
import HeaderContent from "./containers/HeaderContent";
import PageCatalog from "./components/PageCatalog";

export default function HomePage() {
    return (
        <>
        <Header>
            <HeaderContent />
        </Header>
        <main>
            <div className="container">
                <PageCatalog />
            </div>
        </main>
        </>
    )
}
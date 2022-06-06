import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
    const cardsData = data.map((item) => {
        return <Card key={item.id} {...item} />;
    });

    return (
        <div className="container">
            <Header />
            {cardsData}
        </div>
    );
}

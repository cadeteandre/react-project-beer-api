import IBeerListProps from "../../interfaces/IBeerListProps";
import BeerCard from "../beerCard/BeerCard";
import "./BeerList.css";

const BeerList: React.FC<IBeerListProps> = ({ beers }) => {
    return ( 
        <section className="beer__list">
            {beers && beers.map((singleBeer) => (
                <BeerCard singleBeer={singleBeer} />
            ))}
        </section>
    );
}

export default BeerList;
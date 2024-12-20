import BeerList from "../../components/beerList/BeerList";
import ProstToHome from "../../components/prostToHome/ProstToHome";
import IAllBeersProps from "../../interfaces/IAllBeersProps";

const AllBeers: React.FC<IAllBeersProps> = ({ beers }) => {

    return ( 
        <section className="all__beers">
            <BeerList beers={beers} />
            <ProstToHome />
        </section>
    );
}

export default AllBeers;
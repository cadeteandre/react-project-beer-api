import { Link } from "react-router-dom";
import allBeers from "../../../public/images/all-beers.png";
import randomBeerImg from "../../../public/images/random-beer.png";
import "./Home.css";

const Home = () => {

    return ( 
        <section className="home">
            <div className="all__beers">
                <Link to={'/allBeers'}>
                    <img src={allBeers} alt="all-beers" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. 
                </p>
            </div>
            <div className="random__beer">
                <Link to={`/beerDetails/random`}>
                    <img src={randomBeerImg} alt="random-beers" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. 
                </p>
            </div>
        </section>
    );
}

export default Home;
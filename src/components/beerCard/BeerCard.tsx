import { Link } from "react-router-dom";
import IBeerCardProps from "../../interfaces/IBeerCardProps";

const BeerCard: React.FC<IBeerCardProps> = ({ singleBeer }) => {
    return ( 
        <article className="beer__card">
            <div className="beer__img">
                <img src={singleBeer.image_url} alt={singleBeer.name} />
            </div>
            <div className="beer__info">
                <h1>{singleBeer.name}</h1>
                <h3>{singleBeer.tagline}</h3>
                <p>Created by: {singleBeer.name}</p>
                <Link to={`/beerDetails/${singleBeer._id}`} className="details__button">Details</Link>
            </div>
        </article>
    );
}

export default BeerCard;
import { useNavigate, useParams } from "react-router-dom";
import backButton from "../../../public/images/Back.png"
import ProstToHome from "../../components/prostToHome/ProstToHome";
import IBeerDetailsProps from "../../interfaces/IBeerDetailsProps";
import { useEffect } from "react";
import { getBeer } from "../../components/fetch/Fetch";
import "./BeerDetails.css";

const BeerDetails: React.FC<IBeerDetailsProps> = ({ singleBeer, setSingleBeer }) => {

    const { beerID } = useParams();
    
    useEffect(() => {
        getBeer(setSingleBeer, beerID);
    }, [beerID, setSingleBeer])

    const navigate = useNavigate();

    if (!singleBeer) return <p>Loading...</p>
    return ( 
        <>
            <section className="beer__details">
                <h1>Beer Details</h1>
                <img src={singleBeer.image_url} alt={singleBeer.name} />
                <h1>{singleBeer.name}</h1>
                <h3>{singleBeer.tagline}</h3>
                <p><strong>First brewed:</strong> {singleBeer.first_brewed}</p>
                <p><strong>Attenuation level:</strong> {singleBeer.attenuation_level}</p>
                <p>{singleBeer.description}</p>
                <button onClick={() => navigate(-1)}>
                    <img src={backButton} alt="back-button" />
                </button>
            </section>
            <ProstToHome />
        </>
    );
}

export default BeerDetails;
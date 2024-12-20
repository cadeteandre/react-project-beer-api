import IBeers from "./IBeers";

interface IBeerDetailsProps {
    singleBeer: IBeers | null,
    setSingleBeer: React.Dispatch<React.SetStateAction<IBeers | null>>,
    beers: IBeers[] | null
}

export default IBeerDetailsProps;
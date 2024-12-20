import IBeers from "../../interfaces/IBeers";

export const getBeer = ((setState: React.Dispatch<React.SetStateAction<IBeers | null>>, ID: string | undefined) => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${ID}`)
    .then((response) => response.json())
    .then((data) => setState(data))
})

export const getAllBeer = ((setState: React.Dispatch<React.SetStateAction<IBeers[] | null>>) => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers`)
    .then((response) => response.json())
    .then((data) => setState(data))
})
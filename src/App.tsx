import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './rootLayout/RootLayout'
import Home from './pages/home/Home'
import AllBeers from './pages/allBeers/AllBeers'
import BeerDetails from './pages/beerDetails/BeerDetails'
import { useEffect, useState } from 'react'
import IBeers from './interfaces/IBeers'
import { getAllBeer } from './components/fetches/Fetches'

function App() {

  const [beers, setBeers] = useState<IBeers[] | null>(null);
  const [singleBeer, setSingleBeer] = useState<IBeers | null>(null);

  useEffect(() => {
    getAllBeer(setBeers);
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <RootLayout /> }>
        <Route index element={ <Home /> } />
        <Route path='allBeers' element={ <AllBeers beers={beers} /> } />
        <Route path='beerDetails/:beerID' element={ <BeerDetails singleBeer={singleBeer} setSingleBeer={setSingleBeer} beers={beers} /> } />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App

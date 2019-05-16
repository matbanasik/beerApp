import React, {useState, useEffect} from 'react';
import BeerList from './BeerList';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchBeers() {
    setIsLoading(true);
    let response = await fetch("https://api.punkapi.com/v2/beers")
    let json = await response.json()
    setBeers(json)
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <>
      {!isLoading && <BeerList beers={beers} />}
      {isLoading && <div className="spinner"></div>}
    </>
  );
}

export default App;

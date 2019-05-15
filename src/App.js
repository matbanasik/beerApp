import React, {useState, useEffect} from 'react';
import BeerList from './BeerList';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [beers, setBeers] = useState([]);

  async function fetchBeers() {
    let response = await fetch("https://api.punkapi.com/v2/beers")
    let json = await response.json()
    setBeers(json)
  }

  useEffect(() => {
    fetchBeers();
  }, []);

  return <BeerList beers={beers} />;
}

export default App;

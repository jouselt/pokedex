import './App.css';
import List from './components/List/List';
import Loading from './components/Loading/Loading';
import Welcome from './components/Welcome/Welcome';
import React, { useEffect, useState } from 'react'
import axios from 'axios'



function App() {

  const baseURL = 'https://pokeapi.co/api/v2/pokemon/?limit=-1'
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPokemonList(response.data.results);
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <Loading />
      </header>
      <List pokemons={pokemonList}/>

    </div>
  );
}

export default App;

import './App.css';
import List from './components/List/List';
import Loading from './components/Loading/Loading';
import Welcome from './components/Welcome/Welcome';
import React, { useState } from 'react'
import axios from 'axios'
import Modal from './components/UI/Modal/Modal'

function App() {
  const baseURL = 'https://pokeapi.co/api/v2/pokemon/?limit=-1'
  const [pokemonList, setPokemonList] = useState([]);
  const [pageState, setPageState] = useState('welcome');
  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);


  const getStartedHandler = () => {
    setPageState('loading')
    axios.get(baseURL).then((response) => {
      setPokemonList(response.data.results);
      setTimeout(() => {
        setPageState('list')
      }, 500);
    });
  }
  const selectPokemonHandler = (pokemon) => {
    axios.get(pokemon.url).then((pokemonResponse) => {
      setSelectedPokemon(pokemonResponse.data);
      setShowModal(true);
    })
  }

  const dismissModal = () => {
    setShowModal(false);
    setSelectedPokemon(null);
  }

  return (

    <div className="App">
      {showModal && <Modal onDismiss={dismissModal} pokemon={selectedPokemon} />}
      {pageState === 'welcome' && <Welcome start={getStartedHandler} />}
      {pageState === 'loading' && <Loading />}
      {pageState === 'list' && <List pokemons={pokemonList} selectPokemon={selectPokemonHandler} />}
    </div>
  );
}

export default App;

import './App.css'
import { useState } from 'react';
import PokemonList from './PokemonList';
import AddPokemonForm from './AddPokemonForm';

const headerStyle = {
  textAlign: 'center',
  backgroundColor: '#ffcb05',
  color: '#2a75bb',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

function App() {
  const [pokemon, setPokemon] = useState([]);

  const handleAddPokemon = (newPokemon) => {
    setPokemon([...pokemon, newPokemon]);
  };

  return (
    <div>
      <h1 style={headerStyle}>My Pokémon</h1>
      <AddPokemonForm onAdd={handleAddPokemon} />
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;

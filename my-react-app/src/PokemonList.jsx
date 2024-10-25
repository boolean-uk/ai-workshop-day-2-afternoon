import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };
  
  function PokemonList({ pokemon }) {
    const [initialPokemon, setInitialPokemon] = useState([]);
  
    useEffect(() => {
      fetch('https://boolean-uk-api-server.fly.dev/ingeborgausteid/pokemon')
        .then(response => response.json())
        .then(data => setInitialPokemon(data));
    }, []);
  
    const handleDelete = (id) => {
      setInitialPokemon(initialPokemon.filter(poke => poke.id !== id));
    };
  
    const allPokemon = [...initialPokemon, ...pokemon];
  
    return (
      <div style={listStyle}>
        {allPokemon.map(poke => (
          <PokemonCard key={poke.id} pokemon={poke} onDelete={handleDelete} />
        ))}
      </div>
    );
  }
export default PokemonList;
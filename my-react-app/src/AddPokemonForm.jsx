import { useState } from 'react';

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };
  
  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    maxWidth: '300px',
  };
  
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#2a75bb',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };
  
  const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#ffcb05',
    color: '#2a75bb',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '300px',
  };
  
  function AddPokemonForm({ onAdd }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newPokemon = { name, image, liked: false };
      fetch('https://boolean-uk-api-server.fly.dev/ingeborgausteid/pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPokemon),
      })
        .then(response => response.json())
        .then(data => {
          onAdd(data);
          setName('');
          setImage('');
        });
    };
  
    return (
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={headerStyle}>Add a New Pokemon</h2>
        <input
          style={inputStyle}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          style={inputStyle}
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button style={buttonStyle} type="submit">Add Pokémon</button>
      </form>
    );
  }
export default AddPokemonForm;

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '200px',
    height: '400px', // Fixed height for all cards
  };
  
  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };

  const buttonContainerStyle = {
    width: '100%', // Ensure the button container takes full width
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'auto', // Push the button to the bottom
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#ffcb05',
    color: '#2a75bb',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };
  
  function PokemonCard({ pokemon, onDelete }) {
    const handleDelete = () => {
      fetch(`https://boolean-uk-api-server.fly.dev/ingeborgausteid/pokemon/${pokemon.id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            onDelete(pokemon.id);
          }
        });
    };
  
    return (
    <div style={cardStyle}>
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} style={imageStyle} />
      </div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
  }
export default PokemonCard;
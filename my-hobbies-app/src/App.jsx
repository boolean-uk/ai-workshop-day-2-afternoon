import { useState } from 'react'
import './App.css'

function App() {
  const [hobbies, setHobbies] = useState([]);
  const [newHobby, setNewHobby] = useState('');
  const [rank, setRank] = useState(1);

  const addHobby = () => {
    if (newHobby.trim() !== '') {
      setHobbies([...hobbies, { name: newHobby, rank: rank }]);
      setNewHobby('');
      setRank(1);
    }
  };

  const updateRank = (index, newRank) => {
    const updatedHobbies = hobbies.map((hobby, i) => 
      i === index ? { ...hobby, rank: newRank } : hobby
    );
    setHobbies(updatedHobbies);
  };

  const sortedHobbies = hobbies.sort((a, b) => a.rank - b.rank);

  return (
    <div className="App">
      <h1>My Favorite Hobbies</h1>
      <input 
        type="text" 
        value={newHobby} 
        onChange={(e) => setNewHobby(e.target.value)} 
        placeholder="Enter a hobby" 
      />
      <input 
        type="number" 
        value={rank} 
        onChange={(e) => setRank(Number(e.target.value))} 
        placeholder="Rank" 
        min="1"
      />
      <button onClick={addHobby}>Add Hobby</button>
      <ul>
        {sortedHobbies.map((hobby, index) => (
          <li key={index}>
            <input 
              type="number" 
              value={hobby.rank} 
              onChange={(e) => updateRank(index, Number(e.target.value))} 
              min="1"
            />
            {hobby.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;

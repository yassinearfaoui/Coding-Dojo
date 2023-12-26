import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const axiosAPI = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=851&offset=0')
      .then((response) => {
        console.log('axios API RESPONSE  : ', response.data.results);
        setPokemons(response.data.results); // Update to use response.data.results
      })
      .catch((error) => console.log('axios API ERROR :', error));
  };

  return (
    <>
      <button onClick={axiosAPI}>Fetch Pokemons</button>
      <ul>
        {pokemons.map((p, i) => {
          return <li key={i}>{p.name}</li>;
        })}
      </ul>
    </>
  );
}

export default App;

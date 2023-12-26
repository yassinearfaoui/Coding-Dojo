import React from 'react'
import { useState } from 'react'

import './App.css'

function App() {
  const [pokemons,setPokemons] = useState([])
  const fetchAPI = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=851&offset=0")
      .then(response => {
        console.log("RESPONSE :", response);
        return response.json()
      })
      .then(response => {
        console.log("FETCH API RESPONSE AS JSON : ", response.results)
        setPokemons(response.results)
        console.log("fetchpokemons : ", pokemons)
      })
      .catch(error => console.log("FETCH API ERROR :", error))
  }
  return (
    <>
    <button onClick={fetchAPI}> Fetch Pokemons </button>
    <ul>
    {/* {JSON.stringify(pokemons)} */}
    {pokemons.map((p,i) => {
      return (<li key={i}> {p.name} </li>)
      })}
    {/* {pokemons[0].name} */}
    </ul>
    </>
  )
}

export default App

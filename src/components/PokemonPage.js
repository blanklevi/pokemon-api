import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonPage = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        console.log(res);
        setPokemon(res.data.results);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasBeenClicked(true);
  };

  const pokeDisplay = () => {
    if (hasBeenClicked == true) {
      return (
        <div>
          <ul>
            {pokemon.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <button className="btn btn-primary">Fetch Pokemon</button>
        </form>
      </div>
      <div>{pokeDisplay()}</div>
    </div>
  );
};

export default PokemonPage;

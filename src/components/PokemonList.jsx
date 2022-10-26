import React from 'react';

function PokemonList() {
  const [pokemons, setPokemons] = React.useState([]);

  const getPokemon = async () => {
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1150`);
    const data = await api.json();
    console.log(data);
    setPokemons(data.results);
  };

  React.useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </div>
  );
}

export default PokemonList;

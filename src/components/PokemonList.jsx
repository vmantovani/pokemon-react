import React from 'react';

function PokemonList() {
  const getPokemon = async () => {
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const data = await api.json();
    console.log(data);
  };

  React.useEffect(() => {
    getPokemon();
  }, []);

  return <div>PokemonList</div>;
}

export default PokemonList;

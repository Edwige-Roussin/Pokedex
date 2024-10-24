import React from 'react';
import PokemonCard from './components/PokemonCard'; // Import correct de PokemonCard

// Définition du type pour un Pokémon
type Pokemon = {
  name: string;
  image: string;
  description: string;
};

const App: React.FC = () => {
  // Exemple de données pour un Pokémon
  const bulbasaur: Pokemon = {
    name: "Bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    description: "Bulbasaur is a Grass/Poison-type Pokémon."
  };

  return (
    <div>
      <PokemonCard
        name={bulbasaur.name}
        image={bulbasaur.image}
        description={bulbasaur.description}
      />
    </div>
  );
};

export default App;


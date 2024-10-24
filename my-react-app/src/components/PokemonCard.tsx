import React from 'react';

// Définir les types pour les props de PokemonCard
type PokemonCardProps = {
  name: string;
  image: string;
  description: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, description }) => {
  return (
    <div className="pokemon-card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  );
};

export default PokemonCard;



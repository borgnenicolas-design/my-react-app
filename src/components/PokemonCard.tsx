type PokemonCardProps = {
  pokemon: {
    name: string;
    imgSrc: string | null;
  };
};

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div>
      <figure>
        {pokemon.imgSrc !== null ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
}

export default PokemonCard;
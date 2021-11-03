import React, { useEffect, useState } from 'react';
import { service } from '../../../../services';
import Loading from '../Loading/Loading';
import './PokemonCard.css';

function PokemonCard({ url }) {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = service.list(url);

    request.then((res) => {
      setPokemon({
        name: res.data.name,
        img: res.data.sprites.front_default,
        types: res.data.types,
        stats: res.data.stats,
      });
      setLoading(false);
    });

    return () => {
      cancel();
    };
  }, [url]);

  if (loading) return <Loading />;

  return (
    <div className='pokemon-card'>
      <img src={pokemon.img} alt={pokemon.name} />
      <h3 className='pokemon-name'>{pokemon.name}</h3>
      <h6>Types:</h6>
      <div className='pokemon-types'>
        {pokemon.types.map((type) => (
          <p key={type.slot}> {type.type.name} </p>
        ))}
      </div>
      <hr className='solid' />
      <div className='base-stats'>
        {pokemon.stats.map((stat) => (
          <p key={stat.stat.name}>
            {stat.stat.name} : {stat.base_stat}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;

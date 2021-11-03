import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import DragNDropCard from './DragNDropCard';
import PokemonCard from '../Layout/PokemonCard/PokemonCard';
import './DragNDrop.css';

const POKEMONS = [
  'https://pokeapi.co/api/v2/pokemon/1',
  'https://pokeapi.co/api/v2/pokemon/4',
  'https://pokeapi.co/api/v2/pokemon/7',
];

export const Basket = () => {
  const [basket, setBasket] = useState('');
  const [{ isOver }, dropRef] = useDrop({
    accept: 'pokemon',
    drop: (item) => setBasket(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const resetChoice = () => {
    setBasket('');
  };

  return (
    <div className='choose-pokemon'>
      <div className='pokemons-to-choose'>
        {POKEMONS.map((pokemonUrl) => (
          <DragNDropCard
            draggable
            type={'pokemon'}
            url={pokemonUrl}
            basketUrl={basket.url}
            key={pokemonUrl}
          />
        ))}
      </div>
      <div className='basket' ref={dropRef}>
        <button
          onClick={() => {
            resetChoice();
          }}
        >
          X
        </button>
        {basket && <PokemonCard url={basket.url} />}
        {isOver && (
          <div className='drop-message'>
            <p>Drop Here!</p>
          </div>
        )}
      </div>
    </div>
  );
};

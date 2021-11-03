import React, { useState, useEffect } from 'react';
import Pagination from '../Components/Layout/Pagination/Pagination';
import PokemonCard from '../Components/Layout/PokemonCard/PokemonCard';
import { Link } from 'react-router-dom';
import './Pokedex.css';
import { service } from '../../services';
import Loading from '../Components/Layout/Loading/Loading';

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(service);
    setLoading(true);
    const { request, cancel } = service.list(currentPageUrl);
    request.then((res) => {
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemons(res.data.results);
      setLoading(false);
    });
    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return <Loading />;

  return (
    <div>
      <header className='header'>
        <Link to='/'>
          <h1>Pokedéx</h1>
        </Link>
      </header>
      <div className='pokemon-list'>
        {pokemons.map((pokemons) => (
          <PokemonCard url={pokemons.url} key={pokemons.name} />
        ))}
      </div>
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </div>
  );
}

export default Pokedex;

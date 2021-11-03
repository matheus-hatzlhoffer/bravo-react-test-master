import './Home.css';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <div className='Home'>
      <section className='Home-header'>
        <p>Griaule PokeTest</p>
        <div className='navigation-buttons'>
          <button
            type='button'
            className='main-button'
            onClick={() => handleClick('/choose-pokemon')}
          >
            Choose first Pokemon
          </button>
          <button
            type='button'
            className='main-button'
            onClick={() => handleClick('/pokedex')}
          >
            Pokedex
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

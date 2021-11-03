import React from 'react';
import { Basket } from '../Components/DragNDrop/DropArea';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Link } from 'react-router-dom';

function ChoosePokemon() {
  return (
    <div>
      <header className='header'>
        <Link to='/'>
          <h1>Choose Your Pokemon</h1>
        </Link>
      </header>
      <DndProvider backend={HTML5Backend}>
        <Basket />
      </DndProvider>
    </div>
  );
}

export default ChoosePokemon;

import React from 'react';
import { Switch } from 'react-router-dom';
import ChoosePokemon from '../views/ChoosePokemon/ChoosePokemon';

import Home from '../views/Home/Home';
import NotFound from '../views/NotFound/NotFound';
import Pokedex from '../views/Pokedex/Pokedex';
import Route from './routes';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/choose-pokemon' component={ChoosePokemon} />
    <Route exact path='/pokedex' component={Pokedex} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;

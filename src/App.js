import React from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout';
import Startup from './containers/Startup';
import BeersView from './containers/beer/BeersView';
import EditBeer from './containers/beer/EditBeer';
import NewBeer from './containers/beer/NewBeer';

export default () => (
  <Startup>
    <Layout>
      <Switch>

        <Route exact path='/' component={BeersView} />
        <Route exact path='/beers' component={BeersView} />

        <Route exact path='/beers/new' component={NewBeer} />
        <Route exact path='/beers/:beerId' component={EditBeer} />

      </Switch>
    </Layout>
  </Startup>
);

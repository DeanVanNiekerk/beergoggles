import React from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout';
import BeersView from './containers/beer/BeersView';

export default () => (
  <Layout>
    <Switch>

      <Route exact path='/' component={BeersView} />
      <Route exact path='/beers' component={BeersView} />

    </Switch>
  </Layout>
);

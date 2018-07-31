import React from 'react';
import { Route, Switch } from 'react-router';
import CategoryList from './containers/category/CategoryList';

export default () => (
  <Switch>

    <Route exact path='/' component={CategoryList} />
    <Route exact path='/categories' component={CategoryList} />

  </Switch>
);

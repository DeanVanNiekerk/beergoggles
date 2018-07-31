import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Button } from 'reactstrap';

import { fetchBeers } from '../../actions/beerActions'
import { applyCategoryFilter } from '../../helpers/beerHelpers'

import Error from '../../components/Error';
import Loader from '../../components/Loader';
import CategorySelect from '../category/CategorySelect';
import BeerTable from '../../components/beer/BeerTable';
import BeerSearch from './BeerSearch';


class BeersView extends Component {

  constructor(props) {
    super(props);

    this.editBeer = this.editBeer.bind(this);
    this.newBeer = this.newBeer.bind(this);
  }

  componentDidMount() {

    this.props.dispatch(fetchBeers())
  }

  editBeer(beerId) {
    this.props.history.push(`/beers/${beerId}`)
  }

  newBeer() {
    this.props.history.push(`/beers/new`);
  }

  render() {

    if (this.props.error)
      return <Error />

    return (
      <div>
        <CategorySelect />
        <BeerSearch />

        <Button color="primary" size="sm" className="mb-2" onClick={this.newBeer}>New Beer</Button>

        {this.props.loadingBeers && <Loader text="loading beers..." />}
        {!this.props.loadingBeers && <BeerTable beers={this.props.beers} onEdit={this.editBeer} />}
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  beers: applyCategoryFilter(state.beer.beers, state.category.selectedCategoryUrl),
  loadingBeers: state.beer.fetchingBeers,
  error: state.beer.error,
})

export default withRouter(connect(mapStateToProps)(BeersView))
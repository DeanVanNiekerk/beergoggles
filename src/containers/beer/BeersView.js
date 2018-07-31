import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

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
  }

  componentDidMount() {

    this.props.dispatch(fetchBeers())
  }

  editBeer(beerId) {
    this.props.history.push(`/beers/${beerId}`)
  }

  render() {

    if (this.props.error)
      return <Error />

    return (
      <div>
        <CategorySelect />
        <BeerSearch />

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
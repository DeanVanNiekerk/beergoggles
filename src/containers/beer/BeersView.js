import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { fetchCategories } from '../../actions/categoryActions'
import { fetchBeers } from '../../actions/beerActions'
import { applyCategoryFilter } from '../../helpers/beerHelpers'

import Error from '../../components/Error';
import Loader from '../../components/Loader';
import CategorySelect from '../category/CategorySelect';
import BeerTable from '../../components/beer/BeerTable';


class BeersView extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCategories())
    this.props.dispatch(fetchBeers())
  }

  render() {

    if (this.props.loadingCategories)
      return <Loader />
    if (this.props.error)
      return <Error />

    return (
      <div>
        <CategorySelect />

        {this.props.loadingBeers && <Loader text="loading beers..." />}
        {!this.props.loadingBeers && <BeerTable beers={this.props.beers} />}
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.category.categories,
  loadingCategories: state.category.fetchingCategories,

  beers: applyCategoryFilter(state.beer.beers, state.category.selectedCategoryUrl),
  loadingBeers: state.beer.fetchingBeers,

  error: state.category.error || state.beer.error,
})

export default withRouter(connect(mapStateToProps)(BeersView))
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { insertBeer } from '../../actions/beerActions'

import BeerForm from './BeerForm'
import Error from '../../components/Error'
import Loader from '../../components/Loader'

class NewBeer extends Component {

  constructor(props) {
    
    super(props);
    
    let categories = this.props.categories;

    //Set Defaults
    this.state = {
      beer: {
        category: categories.length ? categories[0].url : '',
      }
    }

    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  save(beer) {
    this.props.dispatch(insertBeer(beer, () => {
        this.props.history.push(`/`)
    }));
  }

  cancel() {
    this.props.history.push(`/`)
  }

  render() {

    if (this.props.loading)
      return <Loader />
    if (this.props.saving)
      return <Loader text="saving..." />
    if (this.props.error)
      return <Error />

    return (
      <div>
        <h3>New Beer</h3>
        <BeerForm beer={this.state.beer} categories={this.props.categories} validationErrors={this.props.validationErrors} save={this.save} cancel={this.cancel} />
      </div>
    )

  }
}

const mapStateToProps = state => ({
  loading: state.beer.fetchingBeer,
  saving: state.beer.insertingBeer,
  error: state.beer.error,
  validationErrors: state.beer.validationErrors,
  categories: state.category.categories
})

export default withRouter(connect(mapStateToProps)(NewBeer))
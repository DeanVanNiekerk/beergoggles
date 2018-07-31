import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { fetchBeer, updateBeer } from '../../actions/beerActions'

import BeerForm from './BeerForm'
import Error from '../../components/Error'
import Loader from '../../components/Loader'

class EditBeer extends Component {

  constructor(props) {
    super(props);

    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchBeer(this.props.match.params.beerId))
  }

  save(beer) {
    this.props.dispatch(updateBeer(beer, () => {
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
        <h3>Edit Beer</h3>
        <BeerForm beer={this.props.beer} categories={this.props.categories} save={this.save} cancel={this.cancel} />
      </div>
    )

  }
}

const mapStateToProps = state => ({
  loading: state.beer.fetchingBeer,
  saving: state.beer.updatingBeer,
  error: state.beer.error,
  beer: state.beer.beer,
  categories: state.category.categories
})

export default withRouter(connect(mapStateToProps)(EditBeer))
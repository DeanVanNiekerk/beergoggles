import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Button } from 'reactstrap';

import { fetchBeers, showDeleteBeerModal, showViewBeerModal } from '../../actions/beerActions'
import { applyCategoryFilter } from '../../helpers/beerHelpers'

import Error from '../../components/Error';
import Loader from '../../components/Loader';
import CategorySelect from '../category/CategorySelect';
import BeerTable from '../../components/beer/BeerTable';
import BeerSearch from './BeerSearch';
import DeleteBeerModal from './DeleteBeerModal';
import ViewBeerModal from './ViewBeerModal';


class BeersView extends Component {

  constructor(props) {
    super(props);

    this.editBeer = this.editBeer.bind(this);
    this.newBeer = this.newBeer.bind(this);
    this.confirmDeleteBeer = this.confirmDeleteBeer.bind(this);
    this.beerDeleted = this.beerDeleted.bind(this);
    this.viewBeer = this.viewBeer.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchBeers());
  }

  editBeer(beerId) {
    this.props.history.push(`/beers/${beerId}`)
  }

  newBeer() {
    this.props.history.push(`/beers/new`);
  }

  confirmDeleteBeer(beer) {
    this.props.dispatch(showDeleteBeerModal(beer))
  }

  beerDeleted() {
    this.props.dispatch(fetchBeers());
  }

  viewBeer(beer) {
    this.props.dispatch(showViewBeerModal(beer))
  }

  render() {

    if (this.props.error)
      return <Error />

    return (
      <div>

        <h3>Beers</h3>

        <div className="row mb-1">
          <div className="col">
            <Button color="primary" size="sm" onClick={this.newBeer}>New Beer</Button>
          </div>
          <div className="col-3 pr-0">
            <CategorySelect />
          </div>
          <div className="col-3 pl-1">
            <BeerSearch />
          </div>
        </div>

        {this.props.loadingBeers && <Loader text="loading beers..." />}
        {!this.props.loadingBeers && <BeerTable beers={this.props.beers} onEdit={this.editBeer} onDelete={this.confirmDeleteBeer} onSelect={this.viewBeer} />}

        <DeleteBeerModal onDeleted={this.beerDeleted} />
        <ViewBeerModal />
        
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
import React from 'react';
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { closeViewBeerModal } from '../../actions/beerActions'
import { getCategoryName } from '../../helpers/categoryHelpers'
import { formatDate } from '../../helpers/dateHelper'
import ReadOnlyFormRow from '../../components/ReadOnlyFormRow'

class ViewBeerModal extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    this.props.dispatch(closeViewBeerModal());
  }

  render() {
    return (
      <div>

        <Modal isOpen={this.props.isOpen} toggle={this.close}>
          <ModalHeader toggle={this.close}>Beer Info</ModalHeader>
          <ModalBody>
            <ReadOnlyFormRow title="Category" value={getCategoryName(this.props.beer.category, this.props.categories)} />
            <ReadOnlyFormRow title="Name" value={this.props.beer.name || ''} />
            <ReadOnlyFormRow title="IBU" value={this.props.beer.ibu || ''} />
            <ReadOnlyFormRow title="Calories" value={this.props.beer.calories || ''} />
            <ReadOnlyFormRow title="Alcohol By Volume" value={this.props.beer.abv || ''} />
            <ReadOnlyFormRow title="Style" value={this.props.beer.style || ''} />
            <ReadOnlyFormRow title="Location" value={this.props.beer.brewery_location || ''} />
            <ReadOnlyFormRow title="Created" value={formatDate(this.props.beer.created_on)} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.close}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  beer: state.beer.beer,
  isOpen: state.beer.showViewBeerModal,
  categories: state.category.categories
})

export default connect(mapStateToProps)(ViewBeerModal);
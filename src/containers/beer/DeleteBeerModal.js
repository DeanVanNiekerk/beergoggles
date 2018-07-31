import React from 'react';
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { deleteBeer, closeDeleteBeerModal } from '../../actions/beerActions'
import Loader from '../../components/Loader'

class DeleteBeerModal extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.delete = this.delete.bind(this);
  }

  close() {
    this.props.dispatch(closeDeleteBeerModal());
  }

  delete() {
   this.props.dispatch(deleteBeer(this.props.beer, 
      () => {
        this.props.onDeleted();
        this.close();
   }))
  }

  render() {
    return (
      <div>
        
        <Modal isOpen={this.props.isOpen} toggle={this.close}>
          <ModalHeader toggle={this.close}>Delete Beer</ModalHeader>
          <ModalBody>
            {this.props.deleting && <Loader text="Deleting..." margins={false}/>}
            {!this.props.deleting && this.props.beer.id && <p>Are you sure you want to delete <strong>{this.props.beer.name}</strong>?</p>}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary mr-1" onClick={this.close}>Cancel</Button>
            <Button color="danger" onClick={this.delete}>Delete Forever</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  beer: state.beer.beer,
  deleting: state.beer.deletingBeer,
  isOpen: state.beer.showDeleteBeerModal
})

export default connect(mapStateToProps)(DeleteBeerModal);
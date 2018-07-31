import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { FormGroup, Input } from 'reactstrap';

import { fetchBeers } from '../../actions/beerActions'

class BeerSearch extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.props.dispatch(fetchBeers(event.target.value));
    }

    render() {
        return (
            <FormGroup>
                <Input type="text"
                    onChange={this.onChange}>
                </Input>
            </FormGroup>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.category.categories,
    selectedCategoryUrl: state.category.selectedCategoryUrl
})

export default withRouter(connect(mapStateToProps)(BeerSearch))


import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { FormGroup, Input } from 'reactstrap';

import { receiveSelectedCategoryUrl } from '../../actions/categoryActions'

class CategorySelect extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.props.dispatch(receiveSelectedCategoryUrl(event.target.value));
    }

    render() {
        return (
            <FormGroup className="m-0">
                <Input type="select"
                    bsSize="sm"
                    onChange={this.onChange}
                    value={this.props.selectedCategoryUrl}>
                    <option value=''>&#x3C;select category&#x3E;</option>
                    {this.props.categories.map(category =>
                        <option key={category.url} value={category.url}>
                            {category.name}
                        </option>
                    )}
                </Input>
            </FormGroup>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.category.categories,
    selectedCategoryUrl: state.category.selectedCategoryUrl
})

export default withRouter(connect(mapStateToProps)(CategorySelect))


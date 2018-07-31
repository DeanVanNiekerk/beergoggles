import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { fetchCategories } from '../actions/categoryActions'

class Startup extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCategories())
    }

    render() {

        if (this.props.isLoading)
            return <Loader />;
        if (this.props.error)
            return <Error />

        return this.props.children;
    }
}

const mapStateToProps = state => ({
    isLoading: state.category.fetchingCategories,
    error: state.category.error
  })

export default connect(mapStateToProps)(Startup);
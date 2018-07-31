import { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class CategoryList extends Component {

  componentDidMount() {

  }

  render() {

    return "HI"

  }
}

const mapStateToProps = state => ({
 
})

export default withRouter(connect(mapStateToProps)(CategoryList))
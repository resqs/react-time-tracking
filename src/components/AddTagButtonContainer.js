import React, {Component} from 'react'
import {connect} from 'react-redux'
import {get} from 'lodash'

import AddTagButton from './AddTagButton'
import {fetchList} from '../actions/tags'

class AddTagButtonContainer extends Component {
  handleFetchList = () => {
    this.props.onFetchList(this.props.uid)
  }
  render() {
    return (
      <AddTagButton {...this.props} onFetchList={this.handleFetchList} />
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchList: (uid) => {
      dispatch(fetchList(uid))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    tags: get(state,"tags.tags", []),
    uid: get(state,"auth.user.uid", null)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTagButtonContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addStatus, deleteAllStatus } from '../store/actions'

class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="inline-block">
          <h1>Daily Task Manager</h1>
        </div>
        <div className="inline-block pull-right">
          <button type="button" title="add status" onClick={ () => {this.props.dispatch(addStatus())} }>
            <i className="demo-icon icon-plus">&#xe800;</i> Add Status
          </button>
          <button type="button" title="delete all status" onClick={ () => {this.props.dispatch(deleteAllStatus())} }>
            <i className="demo-icon icon-trash-empty">&#xe801;</i> Delete All
          </button>
        </div>
      </header>
    )
  }
}

export default connect()(AppHeader)

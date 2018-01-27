import React, { Component } from 'react'

class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="inline-block">
          <h1>Daily Task Manager</h1>
        </div>
        <div className="inline-block pull-right">
          <button type="button" title="add status">
            <i className="demo-icon icon-plus">&#xe800;</i> Add Task
          </button>
          <button type="button" title="delete all status">
            <i className="demo-icon icon-trash-empty">&#xe801;</i> Delete All
          </button>
        </div>
      </header>
    )
  }
}

export default AppHeader
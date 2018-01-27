import React, { Component } from 'react'
import TaskItem from './TaskItem'

class StatusItem extends Component {
  render() {
    const { title, card_list } = this.props;
    return (
      <div className="status-item col-md-3 col-sm-6 col-xs-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title inline-block">{title}</h3>
            <button className="inline-block pull-right" title="Delete Status">
              <i className="demo-icon icon-trash-empty">&#xe801;</i>
            </button>
            <button className="inline-block pull-right" title="Edit Title">
              <i className="demo-icon icon-pencil">&#xe804;</i>
            </button>
            <button className="inline-block pull-right" title="Add Task">
              <i className="demo-icon icon-plus">&#xe800;</i>
            </button>
          </div>
          <div className="panel-body">
            {
              card_list.map(item => <TaskItem key={item.id} {...item} />)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default StatusItem
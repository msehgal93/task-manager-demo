import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Droppable } from 'react-drag-and-drop'

import TaskItem from './TaskItem'
import { dragDrop, deleteStatus, addCard, editStatus, saveStatus, cancelStatus } from '../store/actions'


class StatusItem extends Component {
  componentWillMount(){
    // put input out of form submission and forceupdate the component
    // whenever the input changes
    this.input = {
      'value'  : this.props.title,
      'update' : (event) => {
        this.input.value = event.target.value;
        this.forceUpdate();
      }
    };
  }
  onDrop(data) {
    this.props.dispatch(dragDrop(data.card,this.props.id));
  }
  render() {
    const { id, status, title, card_list, dispatch } = this.props;
    if(status === 'edit')
      return (
        <div className="status-item col-md-3 col-sm-6 col-xs-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title inline-block">
                <input type='text' value={this.input.value} onChange={this.input.update}/>
              </h3>
              <button className="inline-block pull-right" title="Cancel" onClick={()=>{dispatch(cancelStatus(id))}}>
                <i className="demo-icon icon-cancel">&#xe802;</i>
              </button>
              <button className="inline-block pull-right" title="Save" onClick={()=>{dispatch(saveStatus(id, this.input.value))}}>
                <i className="demo-icon icon-floppy">&#xe806;</i>
              </button>
            </div>
            <div className="panel-body">
              {
                card_list.map(item => <TaskItem key={item.id} sid={id} {...item} />)
              }
            </div>
          </div>
        </div>
      )
    else
      return (
        <Droppable
          types={['card']} // <= allowed drop types 
          onDrop={this.onDrop.bind(this)}
          className="status-item col-md-3 col-sm-6 col-xs-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title inline-block">{title}</h3>
              <button className="inline-block pull-right" title="Delete Status" onClick={
                () => { dispatch(deleteStatus(id)) }
              }>
                <i className="demo-icon icon-trash-empty">&#xe801;</i>
              </button>
              <button className="inline-block pull-right" title="Edit Title" onClick={
                () => { dispatch(editStatus(id)) }
              }>
                <i className="demo-icon icon-pencil">&#xe804;</i>
              </button>
              <button className="inline-block pull-right" title="Add Task" onClick={
                () => { dispatch(addCard(id)) }
              }>
                <i className="demo-icon icon-plus">&#xe800;</i>
              </button>
            </div>
            <div className="panel-body">
              {
                card_list.map(item => <TaskItem key={item.id} sid={id} {...item} />)
              }
            </div>
          </div>
        </Droppable>
      )
  }
}

export default connect()(StatusItem)

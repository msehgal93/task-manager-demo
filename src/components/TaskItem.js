import React, { Component } from 'react'
import { connect } from 'react-redux'

import { editCard, saveCard, cancelCard, deleteCard } from '../store/actions'

class TaskItem extends Component {
  componentWillMount(){
    // put input out of form submission and forceupdate the component
    // whenever the input changes
    this.input = {
      'value'  : this.props.text,
      'update' : (event) => {
        this.input.value = event.target.value;
        this.forceUpdate();
      }
    };
  }
  render() {
    const { sid, id, status, text, dispatch } = this.props;
    if(status === 'edit')
      return (
        <div className="task-item">
          <div className="text-container">
            <textarea rows="3" className="text text-area" value={this.input.value} onChange={this.input.update}>
            </textarea>
          </div>
          <div className="btn-bar">
            <button className="inline-block pull-right" title="Cancel" onClick={
              () => { dispatch(cancelCard(sid,id)) }
            }>
              <i className="demo-icon icon-cancel">&#xe802;</i>
            </button>
            <button className="inline-block pull-right" title="Save" onClick={
              () => { dispatch(saveCard(sid,id,this.input.value)) }
            }>
              <i className="demo-icon icon-floppy">&#xe806;</i>
            </button>
          </div>
        </div>
      )
    else
      return (
        <div className="task-item">
          <div className="text-container">
            <p className="text">
              {text}
            </p>
          </div>
          <div className="btn-bar">
            <button className="inline-block pull-right" title="Delete Task" onClick={
              () => { dispatch(deleteCard(sid,id)) }
            }>
              <i className="demo-icon icon-trash-empty">&#xe801;</i>
            </button>
            <button className="inline-block pull-right" title="Edit Task" onClick={
              () => { dispatch(editCard(sid,id)) }
            }>
              <i className="demo-icon icon-pencil">&#xe804;</i>
            </button>
          </div>
        </div>
      )
  }
}

export default connect()(TaskItem)
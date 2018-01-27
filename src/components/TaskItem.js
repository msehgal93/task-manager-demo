import React from 'react'

const TaskItem = (props) => {

  const { id, status, text } = props;

  return (
    <div className="task-item">
      <div className="text-container">
        <p className="text">
          {text}
        </p>
      </div>
      <div className="btn-bar">
        <button className="inline-block pull-right" title="Delete Task">
          <i className="demo-icon icon-trash-empty">&#xe801;</i>
        </button>
        <button className="inline-block pull-right" title="Edit Task">
          <i className="demo-icon icon-pencil">&#xe804;</i>
        </button>
      </div>
    </div>
  )
}

export default TaskItem
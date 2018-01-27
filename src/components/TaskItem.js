import React from 'react'

const TaskItem = (props) => (
  <div className="task-item">
    <div className="text-container">
      <p className="text">
        Conversion of web page for mobile and web app
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
);

export default TaskItem
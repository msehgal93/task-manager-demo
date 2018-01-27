import React, { Component } from 'react'
import StatusItem from './StatusItem'

class AppBody extends Component {
  render() {
    return (
      <section className="row">
        <StatusItem />
        <StatusItem />
      </section>
    )
  }
}

export default AppBody
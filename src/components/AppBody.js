import React, { Component } from 'react'
import { connect } from 'react-redux'

import StatusItem from './StatusItem'

import { getStatusList } from '../store/actions'

class AppBody extends Component {
  render() {
    let status_list = this.props.status_list;
    return (
      <section className="row">
        {
          status_list.map( (i) => <StatusItem key={i.id} {...i} />)
        }
      </section>
    )
  }
}

export default connect(getStatusList, ()=>({}))(AppBody)

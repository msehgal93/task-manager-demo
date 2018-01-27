import React, { Component } from 'react'
import { Connect } from 'react-redux'
import AppHeader from '../containers/AppHeader'
import AppBody from './AppBody'

class App extends Component {
	render() {
		return (
			<div>
				<AppHeader />
				<AppBody />
			</div>
		)
	}
}

export default App

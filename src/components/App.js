import React, { Component } from 'react'

class App extends Component {
	render() {
		return (
			<div>
				<h1>Daily Task Manager</h1>
				<section>
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Category Title <button type="button">✕</button></h3>
						</div>
						<div className="panel-body">
							<div>
								Task 1
							</div>
							<div>
								Task 2
							</div>
						</div>
					</div>
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Category Title <button type="button">✕</button></h3>
						</div>
						<div className="panel-body">
							<div>
								Task 1
							</div>
							<div>
								Task 2
							</div>
							<div>
								Task 3
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default App
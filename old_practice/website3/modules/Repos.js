import React from 'react'
import {Link, IndexLink} from 'react-router'

export default React.createClass({
	render() {
		return (
			<div>
				<h1><IndexLink to="/">Essays</IndexLink></h1>
				<ul>
					<li><Link to="/articles/React-Project">React Project</Link></li>
					<li><Link to="/articles/ES6-Modules">ES6 Modules</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
})
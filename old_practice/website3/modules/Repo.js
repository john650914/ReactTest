import React from 'react'

export default React.createClass({
	render() {
		return (
			<div>
				<h3>{this.props.params.articleName}</h3>
				<article>content content content content content content </article>
			</div>
		);
	}
})
import React from 'react';
import { Link, Match } from 'react-router';

const Empty = () => {
	return (
		<h3>Please select a topic</h3>
	)
}

const Topic = ({params}) => {
	return (
		<div>
			<h3>{params.id}</h3>
		</div>
	)
}

const Topics = ({pathname}) => {
	return (
		<div>
			<h2>Topics</h2>
			<ul>
				<li><Link to={`${pathname}/rendering`}>Rendering</Link></li>
				<li><Link to={`${pathname}/components`}>Components</Link></li>
				<li><Link to={`${pathname}/props-vs-state`}>Props VS State</Link></li>
			</ul>
			<Match exactly pattern={pathname} component={Empty} />
			<Match pattern={`${pathname}/:id`} component={Topic} />
		</div>
	);
}

export default Topics;
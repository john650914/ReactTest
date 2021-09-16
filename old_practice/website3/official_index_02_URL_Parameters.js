import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Match, Link } from 'react-router';

const App = (props) => (
	<Router>
		<div>
			<h2>Companies</h2>
			<ul>
				<li><Link to="google">Google</Link></li>
				<li><Link to="facebook">facebook</Link></li>
				<li><Link to="yahoo">Yahoo!</Link></li>
			</ul>
			<Match pattern="/:id" component={Child} />
		</div>
	</Router>
)

const Child = ({ params }) => (
	<h3>Name : {params.id}</h3>
)

render(
	<App />,
	document.getElementById('root')
);
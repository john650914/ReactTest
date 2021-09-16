import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Match, Link, Miss } from 'react-router';

const Home = () => (
	<p>
		When no sibling <code>Match</code> matches,
		a <code>Miss</code> component will render.
	</p>
)

const WillMatch = () => <h3>Matched!</h3>

const NoMatch = ({ location }) => (
	<div>
		<h3>No match for <code>{location.pathname}</code></h3>
	</div>
)

const App = ({ history }) => (
	<Router history={history}>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/will-match">Will Match</Link></li>
				<li><Link to="/will-not-match">Will Not Match</Link></li>
				<li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
			</ul>

			<Match pattern="/" exactly component={Home}/>
			<Match pattern="/will-match" component={WillMatch}/>
			<Miss component={NoMatch} />
		</div>
	</Router>
)

render(<App/>, document.getElementById('root'));
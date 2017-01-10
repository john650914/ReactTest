import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Match, Link, NavigationPrompt } from 'react-router';

class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>Home - React-Router v4!</h1>
				<p>We will be learning about React-Router v4. This example will cover all the new components of react-router.</p>
				<p>With v4 routes are managed just like any other react component. It offers a "Match" component, which matches the pattern specified in props with the current location/window.pathname.</p>
				<p>It also provides with the declarative options for Redirects, blocking a transition and Navigation Prompt.</p>
				<p>We will be covering them all in this example.</p>
			</div>
		)
	}
}

class BasicRouting extends React.Component {
	render() {
		const { location, pattern, pathname, isExact } = this.props
		return (
			<div>
				<h1>BasicRouting</h1>
				<p>With the help of "Match" Component we can specify the Component we want to render for a particular pattern of the App loction/window.pathname.</p>
				<p>Select a level from Left Navigation to view the content, also notice the change in URL.</p>
				<div className="leftNavi">
					<ul>
						<li><Link to={pathname + "/level1"} activeClassName="active">Level 1</Link></li>
						<li><Link to={pathname + "/level2"} activeClassName="active">Level 2</Link></li>
						<li><Link to={pathname + "/level3"} activeClassName="active">Level 3</Link></li>
					</ul>
				</div>
				<div className="rightContent">
					<p>Second Level Content will appear here:</p>
					<Match pattern={`${pathname}/:level`} component={Content}/>
				</div>
			</div>
		)
	}
}

class Content extends React.Component {
	render() {
		const { location, pattern, pathname, isExact } = this.props
		return (
			<div>
				<h2>This is {this.props.params.level}!</h2>
				{location.query !== null ? <p><strong>Query String:</strong> {JSON.stringify(location.query, null, 2)}</p>:null}
			</div>
		)
	}
}

class Blocking extends React.Component {
	render() {
		return (
			<div>
				<h1>Blocking a transition!</h1>
				<p>You can block a transition and have a Navigation prompt with the appropriate message. If you try to go back from this page or navigate to some other page you will see a prompt showing up.</p>
				<NavigationPrompt
					message={(location) => (
						`Are you sure you want to go to ${location.pathname}`
					)}
				/>
			</div>
		)
	}
}

const App = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/" activeOnlyWhenExact activeClassName="active">Home</Link></li>
				<li><Link to="/basic-routing" activeClassName="active">BasicRouting</Link></li>
				<li><Link to="/blocking" activeClassName="active">Blocking</Link></li>
			</ul>
			<Match exactly pattern="/" component={Home} />
			<Match pattern="/basic-routing" component={BasicRouting} />
			<Match pattern="/blocking" component={Blocking} />
		</div>
	</Router>
)

render(<App/>, document.getElementById('root'));
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Match, Link } from 'react-router';

const Home = () => (
	<div>
		<h1>React-Router v4!</h1>
		<p>We will be learning about React-Router v4. This example will cover all the new components of react-router.</p>
		<p>With v4 routes are managed just like any other react component. It offers a "Match" component, which matches the pattern specified in props with the current location/window.pathname.</p>
		<p>It also provides with the declarative options for Redirects, blocking a transition and Navigation Prompt.</p>
		<p>We will be covering them all in this example.</p>
	</div>
)

class Content extends React.Component{
	render(){
		const { location, pattern, pathname, isExact } = this.props;
		return (
			<div>
				<hr/>
				<h2>This is {this.props.params.LVL}!</h2>
				{location.query !== null ? <p><strong>Query String: </strong> {JSON.stringify(location.query, null, 2)}</p>:null} {/*這一段完全不知所勻*/}
				<p>Level內容</p>
			</div>
		)
	}
}

class BasicRouting extends React.Component{
	render(){
		const { location, pattern, pathname, isExact } = this.props;
		return (
			<div>
				<h1>BasicRouting</h1>
				<p>With the help of "Match" Component we can specify the Component we want to render for a particular pattern of the App loction/window.pathname.</p>
				<p>Select a level from Left Navigation to view the content, also notice the change in URL.</p>
				<div className="leftNavi">
					<ul>
						<li><Link to={pathname +"/level1"} activeClassName="active">Level 1</Link></li>
						<li><Link to={pathname +"/level2"} activeClassName="active">Level 2</Link></li>
						<li><Link to={pathname +"/level3"} activeClassName="active">Level 3</Link></li>
					</ul>
				</div>
				<div className="rightContent" style={{border:'1px solid red'}}>
					<p>Second Level Content will appear here:</p>
					<Match pattern={`${pathname}/:LVL`} component={Content} />
				</div>
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
			</ul>
			<Match pattern="/" exactly component={Home} />
			<Match pattern="/basic-routing" component={BasicRouting} />
		</div>
	</Router>
)

render(
	<App />,
	document.getElementById('root')
);
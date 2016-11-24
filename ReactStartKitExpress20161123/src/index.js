require('./sass/main.sass');
require("font-awesome-sass-loader");
require.context('./img', true, /\.?/);
require.context('./json', true, /\.?/);

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import {ItineryGroup} from './components/itineryGroup';

// const repo = `/${window.location.pathname.split('/')[1]}`;
const Root  = React.createClass({
	render() {
		return (
			<div>
				<h1>App</h1>
				{/* change the <a>s to <Link>s */}
				<ul className="nav">
					<li><Link to="/about">About</Link></li>
					<li><Link to="/inbox">Inbox</Link></li>
				</ul>

				{/*
					next we replace `<Child>` with `this.props.children`
					the router will figure out the children for us
				*/}
				{this.props.children}
			</div>
		)
	}
});


render((
	<Router history={browserHistory}>
		<Route path="/" component={Root}>

			<Route path="about" component={ItineryGroup} />
			<Route path="inbox" component={ItineryGroup} />
		</Route>
	</Router>
), document.getElementById("apple"))


// if(module.hot){
// 		module.hot.accept();
// }
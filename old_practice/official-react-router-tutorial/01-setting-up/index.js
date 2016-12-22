import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

render((
	<Router history={browserHistory}>
		<Route path="/" component={Repos}>
			<Route path="/articles/:articleName" component={Repo} />
		</Route>
	</Router>
), document.getElementById('app'))
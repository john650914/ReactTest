import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Match, Link, NavigationPrompt } from 'react-router';

const App = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link
						to="/" activeStyle={{color:'red'}}
						isActive={(location) => (!Object.keys(location.query || {}).length)}>
						{/*「|| {}」沒加會找不到東西會報錯*/}
						No query
					</Link>
				</li>
				<li>
					<Link
						to={{pathname:'/', query:{foo:1, bar:3}}}
						activeStyle={{color: 'red'}}>
						foo=1, bar=2
					</Link> 
				</li>
				<li>
					<Link
						to={{pathname:'/', query:{foo:23}}}
						activeStyle={{color: 'red'}}>
						foo=23
					</Link>
				</li>
			</ul>

			<Match pattern="/" component={Child} />
		</div>
	</Router>
)

const Child = ({ location }) => (
	<pre>{JSON.stringify(location.query, null, 2)}</pre>
)

render(<App/>, document.getElementById('root'));
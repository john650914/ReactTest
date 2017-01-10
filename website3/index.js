import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Match, Link, NavigationPrompt, Miss, Redirect } from 'react-router';

class Public extends React.Component {
	render() {
		return (
			<div>
				<h2>Public Page</h2>
				<p>Everyone can view this page.</p>
			</div>
		)
	}
}


/////////////////////////////////////////////////////////////////////////
const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true
		cb()
		//setTimeout(cb, 1000) // 為何要非同步呢？
	},
	signout(cb) {
		this.isAuthenticated = false
		cb()
		//setTimeout(cb, 1000) // 為何要非同步呢？
	}
}

/////////////////////////////////////////////////////////////////////////
class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {redirectToReferrer: false};
		this.login = this.login.bind(this);
	}

	login() {
		fakeAuth.authenticate(() => {
		this.setState({redirectToReferrer: true})
		})
	}

	render() {
		const { from } = this.props.location.state || '/'
		const { redirectToReferrer } = this.state  
		return (
			<div>
				{redirectToReferrer && (
					<Redirect to={from || '/'}/>
				)}
				
				{from && (
					<div>
						<h2>Protected Page</h2>
						<p>
							You must log in to view the page at<code>{from.pathname}</code>
						</p>
					</div>
				)}
				<button onClick={this.login.bind(this)}>Log in</button>
			</div>
		)
	}
}

/////////////////////////////////////////////////////////////////////////
class Protected extends React.Component {
	constructor(props){
		super(props);
		this.state = {signedOut: false};
	}

	render() {
		const { location, pattern, pathname, isExact, router } = this.props
		const { signedOut } = this.state  
		return (
			<div>
				{signedOut && (<Redirect to='/'/>)}
				<h1>Protected Page</h1>
				<p>You are signed in go back to some other page and come back here.</p>
				<p>You can sign out to view the login page again.</p>
				<button onClick={() => {
					fakeAuth.signout(() => {
						this.setState({signedOut:true})
					})
				}}>Sign out</button>
			</div>
		)
	}
}

/////////////////////////////////////////////////////////////////////////
const App = () => (
	<Router>
		<div>
			<ul>
				<li><Link activeStyle={{color:'red'}} to="/" activeOnlyWhenExact>Public</Link></li>
				<li><Link activeStyle={{color:'red'}} to="/protected">Protected</Link></li>
			</ul>
			<hr/>
			<Match exactly pattern="/" component={Public} />
			<Match pattern="/login" component={Login} />
			<Match pattern="/protected" render={() => (fakeAuth.isAuthenticated ? (<Protected />) : (<Redirect to={{pathname: '/login',state: { from: '/protected'}}}/>))}/>
		</div>
	</Router>
)

render(<App/>, document.getElementById('root'));
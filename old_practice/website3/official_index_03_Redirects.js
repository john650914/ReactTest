/*eslint-disable import/no-unresolved*/
import React, { PropTypes } from 'react'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import Redirect from 'react-router/Redirect'
import Router from 'react-router/BrowserRouter'

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time
////////////////////////////////////////////////////////////




// 一個物件，看起來是記錄是否登入的布林值，但那setTimeout就不知在幹嘛了
const fakeAuth = {
	isAuthenticated: false,
	authenticate(FN) {
		this.isAuthenticated = true
		setTimeout(FN, 100) // fake async
	},
	signout(FN) {
		this.isAuthenticated = false
		FN()
		setTimeout(FN, 100) // weird bug if async?
	}
}

// Router元件
const AuthExample = () => (
	<Router>
		{({ router }) => (
			<div>
				{
					fakeAuth.isAuthenticated ?	( // 如果fakeAuth的isAuthenticated是true(已登入)就組一個登出的按鈕
						<p>
							Welcome! {' '}
							<button onClick={() => { // 按下登出按鈕時
								fakeAuth.signout(() => { // fakeAuth.isAuthenticated指派為false
									router.transitionTo('/') // 然後navigate到'/'(好像是)，有人說transitionTo是一個Mixin(?)，如果不想透過按鈕轉頁，可以使用transitionTo直接到達指定頁面，官網只找到這樣的說明：transition: (func) a shortcut to router.transitionTo with the "to" setted on the link
								})
							}}>Sign out</button>
						</p>
					):(<p>You are not logged in.</p>) // 如果是false(未登入)就組一個「<p>你沒有登入</p>」
				}

				<ul> { /*永遠都存在的主選單*/ }
					<li><Link to="/public">Public Page</Link></li>
					<li><Link to="/protected">Protected Page</Link></li>
				</ul>

				{ /*Router匹配pathName及元件*/ }
				<Match pattern="/public" component={Public}/>
				<Match pattern="/login" component={Login}/>
				{ /*Match也可以做Wrapper？*/ }
				<MatchWhenAuthorized pattern="/protected" component={Protected}/>
			</div>
		)}
	</Router>
)

////////////////////////////////////////////////////////////
const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
	<Match {...rest} render={props => (
		fakeAuth.isAuthenticated ? (
			<Component {...props}/>
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}}/>
		)
	)}/>
)

////////////////////////////////////////////////////////////
const Protected = () => <h3>Protected</h3>
const Public = () => <h3>Public</h3>

////////////////////////////////////////////////////////////
class Login extends React.Component {
	state = {
		redirectToReferrer: false
	}

	login = () => {
		fakeAuth.authenticate(() => {
			this.setState({ redirectToReferrer: true })
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
					<p>
						You must log in to view the page at
						<code>{from.pathname}</code>
					</p>
				)}
				<button onClick={this.login}>Log in</button>
			</div>
		)
	}
}

render(
	<AuthExample />,
	document.getElementById('root')
);







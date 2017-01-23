import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Match, Link, NavigationPrompt, Miss, Redirect } from 'react-router';

//首頁/////////////////////////////////////////////////////////////////////////
const Index = (props) => {
	return(
		<div>
			<h2>這是首頁</h2>
			<p>首頁沒什麼好寫的。</p>
		</div>
	)
}

//公開頁///////////////////////////////////////////////////////////////////////
class Public extends React.Component {
	render() {
		return (
			<div>
				<h2>公開頁面 - 不用登入</h2>
				<p>每個人都可以看到這一頁</p>
			</div>
		)
	}
}

//驗証機制/////////////////////////////////////////////////////////////////////
const fakeAuth = { //這只是一個物件，用來回傳是否認証成功，true或false
	isAuth: false,
	authenticate(authCallback) {
		this.isAuth = true
		//authCallback()
		setTimeout(authCallback, 1000)
	},
	signout(authCallback) {
		this.isAuth = false
		//authCallback()
		setTimeout(authCallback, 1000)
	}
}

//登入頁///////////////////////////////////////////////////////////////////////
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
		const from = this.props.location.state.from || '/'
		return (
			<div>
				{this.state.redirectToReferrer && (<Redirect to={from || '/'}/>)}
				
				{from && (
					<div>
						<h2><img src="http://www.lanebryant.com/assets/lb/assets/images/outfit/x.png" style={{verticalAlign:"middle"}} /> 請先登入</h2>
						<p>
							要看保護的內容必需要先登入 {from}
						</p>
					</div>
				)}
				<button onClick={this.login}>登入</button>
			</div>
		)
	}
}

//保護的內容///////////////////////////////////////////////////////////////////
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
				<h1>這是保護的內容</h1>
				<p>你已經登入這個網站</p>
				<p>試試看瀏覽別的頁面再回到這裡，你的狀態還是會保持登入</p>
				<p>如果按下面的登出就要再登入一次才能再看到這一頁</p>
				<button onClick={() => {
					fakeAuth.signout(() => {
						this.setState({signedOut:true})
					})
				}}>登出</button>
			</div>
		)
	}
}

//主元件///////////////////////////////////////////////////////////////////////
const App = () => (
	<Router>
		<div>
			<ul>
				<li><Link activeStyle={{color:'red'}} to="/public" activeOnlyWhenExact>公開頁</Link></li>
				<li><Link activeStyle={{color:'red'}} to="/protected">保護的內容</Link></li>
			</ul>
			<hr/>
			<Match exactly pattern="/" component={Index} />
			<Match pattern="/public" component={Public} />
			<Match pattern="/login" component={Login} />
			<Match pattern="/protected" render={
				() => (
					fakeAuth.isAuth ? <Protected /> : <Redirect to={{pathname: '/login',state: { from: '/protected'}}}/>
				)
			}/>
		</div>
	</Router>
)

render(<App/>, document.getElementById('root'));
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Match, Link, NavigationPrompt, Miss, Redirect } from 'react-router';

//首頁///////////////////////////////////////////////////////////////////////
const Index = (props) => {
	return(
		<div>
			<h2>這是首頁</h2>
			<p>首頁也沒什麼好寫的。</p>
		</div>
	)
}

//公開頁/////////////////////////////////////////////////////////////////////
class Public extends React.Component {
	render() {
		return (
			<div>
				<h2>公開的頁面</h2>
				<p>不用登入每個人都可以看的到。</p>
			</div>
		)
	}
}


//驗證機制///////////////////////////////////////////////////////////////////
const fakeAuth = { //這只是一個物件，用來傳回驗證的結果
	isAuth: false,
	authenticate(callBack) {
		this.isAuth = true
		// callBack()
		setTimeout(callBack, 1000)
	},
	signout(callBack) {
		this.isAuth = false
		// callBack()
		setTimeout(callBack, 1000)
	}
}

//登入表單///////////////////////////////////////////////////////////////////
class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {redirectToReferrer: false};
		this.login = this.login.bind(this);
	}
	login(e) {
		e.preventDefault();
		fakeAuth.authenticate(() => {
			this.setState({redirectToReferrer: true})
		})
	}
	render() {
		const { from } = this.props.location.state || '/'
		/*const from = this.props.location.state.from || '/'*/
		const redirectToReferrer = this.state.redirectToReferrer
		console.dir(this.props);
		return (
			<div>
				{redirectToReferrer && <Redirect to={from || '/'}/>}
				{from &&
					<form>
						<fieldset>
							<legend>會員登入</legend>
							<p>您必需要登入才能瀏覽「{from}」頁面</p>
						</fieldset>
					</form>
				}
							<button onClick={this.login}>登入</button>
			</div>
		)
	}
}

//保護的內容/////////////////////////////////////////////////////////////////
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
				<h1>保護的內容</h1>
				<p>登入成功！您可以瀏覽此頁的內容。</p>
				<p>試著瀏覽其它頁面再回到這裡，會發現還是保持登入狀態。</p>
				<p>若要登出請按下方登出按鍵。</p>
				<button onClick={() => {
					fakeAuth.signout(() => {
						this.setState({signedOut:true})
					})
				}}>登出</button>
			</div>
		)
	}
}

//主元件/////////////////////////////////////////////////////////////////////
const App = () => (
	<Router>
		<div>
			<ul>
				<li><Link activeStyle={{color:'red'}} to="/public">公開頁</Link></li>
				<li><Link activeStyle={{color:'red'}} to="/protected">受保護的內容</Link></li>
			</ul>
			<Match exactly pattern="/" component={Index} />
			<Match pattern="/public" component={Public} />
			<Match pattern="/login" component={Login} />
			<Match pattern="/protected" render={
				() => (fakeAuth.isAuth ? <Protected /> : <Redirect to={
					{pathname: '/login', state: { from: '/protected'}}
				}/>)
			}/>
		</div>
	</Router>
)

render(<App/>, document.getElementById('root'));
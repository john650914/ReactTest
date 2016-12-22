import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, Redirect, browserHistory } from 'react-router'

const App = React.createClass({
	render() {
		return (
			<div>
				<h1><IndexLink to="/">React Practice</IndexLink></h1>
				<ul className="index-menu">
					<li><Link activeClassName="active" to="/about">About</Link></li>
					<li><Link activeClassName="active" to="/inbox">Inbox</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
});

const Index = React.createClass({
	handleSubmit(e){
		e.preventDefault();
		const author = e.target.elements[0].value;
		const bookname = e.target.elements[1].value;
		const path = `/books/${author}/${bookname}`;
		browserHistory.push(path);
	},
	render() {
		return (
			<div className="wrap">
				<p>查詢書籍：</p>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="作者" ref={(input) => this.author = input} />
					<input type="text" placeholder="書名" ref={(input) => this.bookname = input} />
					<button type="submit">Go</button>
				</form>
			</div>
		)
	}
});

const NotFound = React.createClass({
	render() {
		return <div>404 Not Found</div>
	}
});

const About = React.createClass({
	render() {
		return (
			<div className="wrap">
				<ul>
					<li><IndexLink activeClassName="active" to="/about">簡介</IndexLink></li>
					<li><Link activeClassName="active" to="/about/biography">自傳</Link></li>
					<li><Link activeClassName="active" to="/about/infomation">基本資料</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
});

const AboutIndex = React.createClass({
	render() {
		return <div>關於我的首頁<br/>這裡有關於我的資料，<br/>呵呵</div>
	}
});

const Biography = React.createClass({
	render() {
		return <div>我是張復漢，男性</div>
	}
});

const Infomation = React.createClass({
	render() {
		return <div>身長183，體重90斤&gt;&lt;，只想安靜的做個美男子</div>
	}
});

const Inbox = React.createClass({
	render() {
		return <div className="wrap">Inbox</div>
	}
});

const book = React.createClass({
	checkBookExist(){
		return('你輸入的資料找不到簡介喔！');
	},
	render() {
		return (
			<div className="wrap">
				<h1>BOOK LIST</h1>
				<div>作者：{this.props.params.author}</div>
				<div>書名：{this.props.params.bookname}</div><br />
				<div>{this.checkBookExist()}</div>
			</div>
		)
	}
});

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Index} />
			<Route path="about" component={About}>
				<IndexRoute component={AboutIndex} />
				<Route path="biography" component={Biography} />
				<Route path="infomation" component={Infomation} />
			</Route>
			<Route path="/inbox" component={Inbox} />
		</Route>
		<Route path="/books/:author/:bookname" component={book}/>
		<Route path="*" component={NotFound} />
	</Router>
), document.getElementById('app'));
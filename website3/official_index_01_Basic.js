import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Match, Link } from 'react-router';

const Home = () => {
	return(
		<div>
			<h2>Home</h2>	
			<p>這是首頁</p>
		</div>
	)
}

const About = () => {
	return(
		<div>
			<h2>About</h2>	
			<p>關於我們</p>
		</div>
	)
}

const Topics = ({pathname}) => ( /*pathname是參照父元件Match的pattern值(標記01)的pattern，也就是"/topics"*/
	<div>
		<ul>
			<li><Link to={`${pathname}/rendering`}>Rendering</Link></li>
			<li><Link to={`${pathname}/components`}>Components</Link></li>
			<li><Link to={`${pathname}/props-vs-state`}>Props VS. State</Link></li>
		</ul>
		<Match pattern={pathname} exactly component={TopicIndex} />
		<Match pattern={`${pathname}/:topicId`} component={Topic} />
	</div>
)

const TopicIndex = () => <h3>請選擇上方文章</h3>

const Topic = ({params}) => ( /*params是參照Match的pattern值中「:+字串」的值的集合*/
	<div>
		<h3>{params.topicId}</h3>
		<p>這是要載入topic文章的地方</p>
	</div>
)

const App = () => {
	return(
		<Router>
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/topics">Topics</Link></li>
				</ul>

				<hr/>

				<Match pattern="/" exactly component={Home}></Match>
				<Match pattern="/about" component={About}></Match>
				<Match pattern="/topics" component={Topics}></Match>
			</div>
		</Router>
	)
}

render(
	<App />,
	document.getElementById('root')
);


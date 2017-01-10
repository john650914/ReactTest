import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Match, Link } from 'react-router';

//首頁元件(第一層)
const Home = () => {
	return(
		<div>
			<h2>Home</h2>	
			<p>這是首頁</p>
		</div>
	)
}

//關於我們頁元件(第一層)
const About = () => {
	return(
		<div>
			<h2>About</h2>	
			<p>關於我們</p>
		</div>
	)
}

//主題入口頁元件(第一層)
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

//主題頁元件(第二層)
const Topic = ({params}) => ( /*params是參照Match的pattern值中「:+字串」的值的集合*/
	<div>
		<h3>{params.topicId}</h3>
		<p>這是要載入topic文章的地方</p>
	</div>
)

//一個示意用的小元件，官網範例直接寫在Match裡render出來
const TopicIndex = () => <h3>請選擇上方文章</h3>

//Root元件(第零層)
const App = () => {
	return(
		<div>
			<span>root</span>
			<Router> 
				<div> {/*Router裡的JSX也要用成對的標籤包起來*/}
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
		</div>
	)
}

render(<App/>, document.getElementById('root'));


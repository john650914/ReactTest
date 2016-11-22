var newObj = document.createElement("div");
newObj.id = 'content';
document.body.appendChild(newObj);


import React from "react";
import ReactDOM from "react-dom";
import style from "./sass/main.sass";

class App extends React.Component {
	render() {
		return (
			<div>
				<p>My Content1aaaaaaaaaaa2</p>
				<p>My Content1aaaaaaaaaaa2</p>
				<p>My Content1aaaaaaaaaaa2</p>
				<p>My Content1aaaaaaaaaaa2</p>
				<p>My Content1aaaaaaaaaaa2</p>
				<p>My Content1aaaaaaaaaaa2</p>
				<p>My Content1aaaaaaaaaaa2</p>
				<p>My Content1aaaaaaaaaaa2</p>
				<p>My Content1aaaaaaaaaaa2</p>
				<img src="/myComponents/sass/img/puppy.jpg" />
			</div>
		);
	}
}

if (module.hot) {
	module.hot.accept();
}

ReactDOM.render(
	<App />,
	document.getElementById('content')
);
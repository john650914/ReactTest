var newObj = document.createElement("div");
newObj.id = 'content';
document.body.appendChild(newObj);


import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	render() {
		return (
			<div className="app">My Content1aaaaaaaaaaa2</div>
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
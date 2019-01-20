import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	render(){
		return (
			<div>
				<h1>This is an apple!!!</h1>
				<img src={require("./assets/images/smile.png")} />
			</div>
		);
	}
}

ReactDOM.render(<App />,document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';

class App{
	constructor(props){
		super(props);
		this.state = {value: ''};
	}

	handleChange = (e) => {
		this.setState({value: e.target.value});
	}

	render(){
		return (
			<div>
				<input type="text" value={this.state.value} />
			</div>
		);
	}
}

ReactDom.render(
	<App/>,
	document.getElementById("root")
);
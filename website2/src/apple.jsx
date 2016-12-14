import React from 'react';
import ReactDOM from 'react-dom';


class Apple extends React.Component{
	render(){
		return (
			<div>
				<h1>This is an apple!!!</h1>
				<img src={require("./images/smile.png")} />
			</div>
		);
	}
}

ReactDOM.render(<Apple />,document.getElementById('fruit'));
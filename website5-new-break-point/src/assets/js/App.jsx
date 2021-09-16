import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';

let App = <div style={{
		backgroundImage: `url(${require('../css/img/bg.png')})`,
		backgroundColor: '#fff'
	}}>
	<h2>text from App.jsx</h2>
	<img src={require('../img/react.png')} />
</div>;

ReactDOM.render(
	App,
	document.getElementById('root')
);
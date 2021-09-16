import "core-js/stable";
import "regenerator-runtime/runtime";

import "../css/common.scss";
import "../css/page.css";

import React from 'react';
import ReactDOM from 'react-dom';

let App2 = <h2>text from page.js</h2>

ReactDOM.render(
	App2,
	document.getElementById('root')
);


console.log('page.js');

var nobiImg = new Image();
nobiImg.src = require('../img/nobi.png');
document.querySelector('body').appendChild(nobiImg);
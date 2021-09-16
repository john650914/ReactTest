import "core-js/stable";
import "regenerator-runtime/runtime";

import "../css/common.scss";
import "../css/index.css";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'

let Index = <h2>text from index.js</h2>

ReactDOM.render(
	Index,
	document.getElementById('root2')
);

//import '../css/default.scss';
//看來寫成
/* require('../css/default.scss');
import '../css/page.css'; */

//測試ES6
/* const adder = (n1, n2) => {
	if(!n1){
		throw new Error('n1 is required');
	}
	if(!n2){
		throw new Error('n2 is required');
	}
	return n1+n2;
}
const muler = (n1, n2) => {
	if(!n1){
		throw new Error('n1 is required');
	}
	if(!n2){
		throw new Error('n2 is required');
	}
	return n1*n2;
}
alert(`the result is ${adder(10,2)+muler(2,3)}`); */



console.log('index.js');



//測試CommonJS的Module
const myFN1 = require('./myModule.js').default;
myFN1(111111111111);

const myFN2 = require('./myModule2.js').default;
myFN2(222222222222);

/* import myFN1 from './myModule.js'
myFN1(11111111111); */


/* import myFN2 from './myModule.js'
myFN2(222222222222); */





/* function myFN3(a){
	console.log(a);
}

document.querySelector('.btn').addEventListener('click', function(){
	myFN3(2143);
});
console.log(124321542351324); */



/* let myPromise = new Promise(function(myResolve, myReject) {
	let x = 0;
	if (x == 0) {
		myResolve("Promise OK的啦！");
	} else {
		myReject("Error");
	}
});
myPromise.then(
	function(v) {console.log(v);},
	function(e) {console.log(e);}
); */
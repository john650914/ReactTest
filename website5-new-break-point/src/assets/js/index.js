import '../css/default.css'; //看來寫成require('../css/default.css');也可以

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

//測試CommonJS的Module
//const myFN1 = require('./myModule.js');

//測試ES6的Module
//import myFN2 from './myModule.js'

function myFN3(a){
	console.log(a);
}
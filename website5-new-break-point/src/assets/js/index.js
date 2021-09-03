//import '../css/default.scss';
//看來寫成
require('../css/default.scss');
import '../css/page-dora.css';



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





//測試CommonJS的Module
const myFN1 = require('./myModule.js').default;
myFN1(111111111111);

/* import myFN1 from './myModule.js'
myFN1(111111111111); */


/* import myFN2 from './myModule.js'
myFN2(222222222222); */





/* function myFN3(a){
	console.log(a);
}

document.querySelector('.btn').addEventListener('click', function(){
	myFN3(2143);
});
console.log(124321542351324); */

var nobiImg = new Image();
nobiImg.src = require('../img/nobi.png');
document.querySelector('body').appendChild(nobiImg);
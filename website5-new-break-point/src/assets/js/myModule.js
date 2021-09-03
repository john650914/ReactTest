/* function consoller(m, t){
	console.log(`${t.toString()}: ${m}`);
} */

/* const consoller = (m, t) => console.log(`${t.toString()}: ${m}`);

function print(m){
	consoller(m, new Date());
}

export default print; */


//const myVar = 'aaa';


//測試CommonJS的Module
/* const myFN1 = (a) => console.log(a);
module.exports = myFN1; */

export const myFN1 = (a) => console.log(a);
export default myFN1;

//測試ES6的Module
/* export const myFN2 = (a) => console.log(a);
export default myFN2; */
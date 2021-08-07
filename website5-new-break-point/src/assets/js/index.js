const adder = (n1, n2) => {
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

alert(`the result is ${adder(10,2)+muler(2,3)}`);
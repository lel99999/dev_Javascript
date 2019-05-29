function multiply(a,b,c){
	return a * b * c;
}

multiply(1,2,3);

function multiply(a){
	return (b) => {
		return (c) => {
			return a * b * c;
		}
	}
}

console.log(multiply(1)(2)(3))

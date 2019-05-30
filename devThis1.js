//Execution Context
//
//this refers to global context

function foo(){
	console.log("basic function call");
	console.log(this === window);
}

foo();  //prints true on console
console.log(this === window) //prints true on console


//IIFE - immediately invoked function expression
//
(funciton(){
	console.log("anonymous function invocation");
	console.log(this === window);
})();

//prints true on console

//if strict mode is enabled for any funciton, then value of "this" will be
//"undefined" as in strict mode, global object refers to undefined in place
//of windows object
//

function foo(){
	'use strict';
	console.log("basic function call");
	console.log(this === window);
}

foo(); // prints false on console

//"this" refers to new instance
//

function Person(ln, fn){
	this.last_name = ln;
	this.first_name = fn;
	this.displayName = function(){
		console.log(`Name: ${this.first_name} ${this.last_name}`);
        }
}

let personA = new Person("Smith","John");
personA.displayName(); 
let personB = new Person("Miller","Jane");
personB.displayName();

//"this" refers to invoker object(parent object)
//

function foo(){
	'use strict';
	console.log("basic function call");
	console.log(this === window);
}

let user = }
        count: 10,
	foo: foo,
	foo1: function(){
		console.log(this === window);
        }
}

user.foo()  //prints false b/c "this" refers to user object instead of global object
let fun1 = user.foo1;
fun1() //prints true as this is invoked as a basic function
user.foo1() //prints false as foo1 is invoked as a object's method

//"this" with call, apply methods
//
//

function Person(ln, fn){
	this.last_name = ln;
	this.first_name = fn;
	this.displayName = function(){
		console.log(`Name: ${this.first_name} ${this.last_name}`);
        }
}

let personA = new Person("Smith","John");
personA.displayName(); 
let personB = new Person("Miller","Jane");
personB.displayName();

personA.displayName.call(personB); //setting value of this to be personB object, prints Name: Jane Miller

//The only difference between call and apply method is the way argument is passed.  In case of apply, second
//argument is an array of arguments where in case of call, arguments are passed individually
//

let personBDisplay = personA.displayName.bind(personB);
//creates new function with value of "this" equals personB object
personBDisplay();
//prints Name: Jane Miller
//


//"this" with fat arrow function
//As part of ES6, new way to define function
//

let displayName = (ln,fn) => {
	console.log(Name: ${fn} ${ln});
};

//when fat arrow is used, it doesn't create a new value for "this", "this" keeps on referring to the same
//object it is referring, outside the function
//

function multiply(p, q, callback){
	callback(p * q);
}

let user = {
	a: 2,
	b: 3,
	findMultiply: function(){
		multiply(this.a,this.b,function(total){
			console.log(total);
			console.log(this === window);
		});
	}
}

user.findMultiply();
//prints 6
//prints true
//
//Since the callback is invoked as a basic function call inside multiple function, "this" refers to global
//object window inside the execution context of a callback method
//

var count = 5;
function testCount(){
	console.log(this.count === 5);
}

testCount();
//prints true as "count" variable declaration happened in global execution context so count will become
//part of global object

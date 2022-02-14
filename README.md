# Angular Training

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 
banu@lucidatechnologies.com; 
banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/Angular_SG
----------------------------------------------------------

Softwares Required:
1) Visual Studio Code.
2) Chrome Web Browser
3) NodeJS Latest LTS

-----------------------------------

Day 1: JS and NodeJS, Typescript
Day 2 and Day 3: Angular

JavaScript is loosely typed, dynamically typed scripting language exectuted within JavaScript engine

keyword "var"

var name = "Smith"; // based on literal value engine treats this as a type [ string ]

name.toUpperCase(); // works fine

var age = 24;
age++;
...

age = "Twenty Five"; // valid
age++; // error

JS engines ==> V8, SpiderMonkey, ...

file.js ==> concept of global & function creation and exection context, hoisting

var g = 100;

function doTask() {
	var a = 10;
	if( g > a) {
		var b = 20;
		c = 30;
	}
	console.log(g, a, b, c);
}

doTask();
console.log(g, a, b, c);

================
function add(x, y) {
	console.log(x + y);
}


function add(x, y) {
	return x + y;
}

let res = add(4,5); 

===


function add(x, y) {
	return 
		x + y;
}

let res = add(4,5); // res will be "undefined"

==> semi-colon insertion will building AST by engine

=========================
TypeScript
* Provide type system for JavaScript ==> statically typed
* enhance code quality and understandabilty
* catch errors at compilation time instead of runtime failures
* Better documentation

Engine understands JS

We can write code in DART, TypeScript, CoffeeScript, LiveScript, ES2015/ESNext

Transpiler / TransCompiler / Preprocessor / Compiler to convert to JS

Babel ==> for higher version of JS to version of JS understandable by Engine
TSC ==> TypeScript compiler

node --version

npm install -g typescript

TypeScript types
1) Basic types : number, string, boolean

keyword "let" and "const" are used for block level scope

let name:string = "Raj"; 

name = 32; // errors are detected by TSC 

let age:number = 32;

let flag:boolean = true;


2) Complex types: enum, object, array

enum Directions {
	NORTH, EAST, WEST, SOUTH
}

let path:Directions = Directions.NORTH;

Object type {}

JSON ==> JavaScript Object notation

let person: {
	name: string,
	age: number
} = {
	name: "Peter",
	age:32
};


IN JS 
let person = {
	name: "Peter",
	age:32
};

Type alias:

type Person = {
	name: string,
	age: number
}

let p: Person;

p = {
	name: "Peter",
	age:32
};


Array type []:

let people: Person[];

people = [{
	name: "Peter",
	age:32
},
{
	name: "Smitha",
	age:24
}
]

Union types:

let course:string | number = "Angular 13";

course = 780; // valid

3) Functions

function add(a:number, b:number) : number | string {
	return a + b;
	// or return "Result : " + (a + b); // valid
} 

4) "any" type
won't trigger type errors

let data:any = 100;
data = false;
data = "test";

5) "unknown" type

let data:unknown = 100;

any vs unknown

function doTask(callback:any):void {
	callback();
}

doTask(100);

At runtime we get callback is not a function.

--

"unknown" ==> need to perform typechecking before using  ==> enforces

function doTask(callback:unknown):void {
	if(typeof callback === 'function') {
		callback();
	} else if (typeof callback === 'number') {
		console.log(callback);
	}
}

doTask(100);

----------------------------------

Optional Properties [ ? ]

function print(user: {firstName:string, lastName?:string}) {

}

print({"firstName": "Kim", "lastName": "Yardley"});
print({"firstName": "Parthiv"});

6) interface type
* interface as shape similar to "type"
if within a file need to have shape use "type", if shape of object needs to be exported and used
across modules use "interface"

type Person = {
	firstName: string,
	lastName?:string,
	email:string
}

interface Person {
	firstName: string,
	lastName?:string,
	email:string
}

* interface for behaviour

interface Comparable {
	compare(args): boolean
}

class Person implements Comparable {
	....

	compare(args:any) : boolean {

	}
}


* interfaces are extendable

interface Product {
	name:string,
	price: number
}

interface Mobile extends Product {
	camera: string,
	connectivity: string
}

function print(mobile:Mobile) {

}

print({name:"iPhone", price:89000, camera:"34px", "connectivity": "5G"});


----

Type assertions: "as"

interface Product {
	name:string,
	price: number
}

// 3rd party JS code
function getProduct() {

}

TypeScript:

let p = getProduct();

p.name = "Samsung"; // error


Avoid above error:
let p = getProduct() as Product;
p.name = "Samsung"; // valid


const btn = document.getElementById("okBtn") as HTMLButtonElement;

btn.click();













	






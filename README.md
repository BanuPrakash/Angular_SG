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
```
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

```
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
```
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
```
Union types:

let course:string | number = "Angular 13";

course = 780; // valid

3) Functions
```
function add(a:number, b:number) : number | string {
	return a + b;
	// or return "Result : " + (a + b); // valid
} 
```

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

```
function doTask(callback:unknown):void {
	if(typeof callback === 'function') {
		callback();
	} else if (typeof callback === 'number') {
		console.log(callback);
	}
}

doTask(100);

```
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


===================

Callbacks, promise api, async await, ...

JavaScript engine callback and event loop


console.log("Hello!!!");

setInterval(function timed() {
	console.log("time!!!")
}, 500);

$("#btn").click(function clicked() {
	console.log("clicked!!!")
});

console.log("Bye!!!");


==

void run() {
	while(true) {
		Thread.sleep(500);
		callbackQueue.push(timed());
	}
}

====================

Function Types and Arrow Opertors:


let add: (x:number, y:number) => number;

add = function(x:number, y: number) {
	return x + y;
}
or
add = (x:number, y: number) => x + y;


=============================

HOF ==> High Order Functions
* functions taking function as arguments
* functions returning a function

==> treat function as first class members similar to primitives or object



```
type Product = {
 id:number,
 name: string,
 price:number,
 category:string;
}

// HOF with Generics
function forEach<T>(elems:T[], action:(elem:T) => void): void {
	let i:number;
	for(i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}
	
let nos:number[] = [ 6,3,2,1,5,9];
forEach<number>(nos, console.log);
let names:string[] = ["Sita", "Geetha", "Rita", "Raj"];
forEach<string>(names, console.log);

let products:Product[] = [
    {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
      {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

forEach<Product>(products, console.log);

```
npm -g typescript

tsc hof1.ts
generates a "js" file ==> hof1.js


function merge<U, V>(obj1:U, obj2:V) {
	return {
		...obj1,
		...obj2
	}
}


let person = merge( {
	name: 'Larry'
},
{
	age: 25
});

person has name and age

this also works:
let person = merge( {
	name: 'Larry'	
}, 25); // valid

function merge<U extends object, V extends object>(obj1:U, obj2:V) {

========================================
https://rxmarbles.com/

map hof


task:
1) pass product json and get back names
2) pass names and get back uppercase names
3) pass numbers and get value * 2

function map<T, R>(elems:T[], transformFn:(elem:T) => R): R[] {

===========================================

HOF ==> function returning a function


getEmployee(5); ==> makes an api call to Spring boot / Razor MVC ==> DB ==> sends JSON ==> cache

getEmployee(5); ==> cache

============================================================

NodeJS

Node.js is a Platform / JavaScript runtime environment with V8 engine.

Where can I use NodeJS?
1) to build RESTful Web services / GraphQL web services similar to Spring Boot / .NET MVC
2) Build traditional web application development like ==> servlet/JSP, ASP.NET, PHP
3) Realtime application dev like ChatBot
4) Streaming API like OTT ==> Netflix, Hotstar, Prime , Voot, SunNxt,..
5) Client side web application bundling
	5.1) we may chosse to write code in DART, CoffeScript, Typescript
		==> transcompiled to JS to make it compatable for browser

	5.2) test the code ==> Unit testing / E2E testing
	5.3) Static Code analyis ==> ESLint / TSLint
	5.4) bundle the code after minify, uglify 
		function doTask () {
			var products = [];
		}
		into:
		function o(){var p=[];}

		<script src="a.js"></script>	
		<script src="b.js"></script>
		<script src="c.js"></script>
		<script src="d.js"></script>

		50+ files
		bundle.js

Package Managers: NPM and YARN package managers for NodeJS
node comes with pre-defined modules like "fs", "http", "crypto", ..
many a times we need 3rd party modules in project ==> "react", "angular", "jquery", "lodash"

yarn add lodash
npm install lodash
every project has "node_modules" folder ==> 3rd party libraries are downloaded into this folder

--

npm publish

this is to publish node module onto repo

---

to run scripts

npm start
npm test
npm run e2e
npm run bundle

-------------------------------------------
Initialize a node project

nodeexamples> npm init --y


creates package.json file
==> one per project where scripts, dependencies, devDependencies are configured

dependencies=> modules required in production also

"dependencies": {
    "lodash": "^4.17.21"
 }

devDependencies ==> modules required only in development environment [ testing, bundle, lint]
npm i lodash

"lodash": "^4.17.21" any latest version equal or greater than 

"lodash": "4.17.21" exact version 

"lodash": "~4.17.21" ==> major version has to be "4", minor and patch can be latest


team member
download project - "node_modules" from "repo"

in project: npm i

=====================================

JavaScript in TypeScript

Approach 
1)

JS included using CDN
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
    <script src="example.js"></script>
</body>

example.ts
declare var random:any;

function doTask(): void {
    console.log(random(1,100));
}


Approach 2) Declaration files
using typings.d.ts
declare module 'lodash' {
    export function random(min:number, max:number): number
}

example.ts
import {random} from 'lodash';

function doTask(): void {
    console.log(random(1,100));
}

Approach 3)
using DefinitelyTyped
https://github.com/DefinitelyTyped/DefinitelyTyped

The repository for high quality TypeScript type definitions.
npm i @types/lodash
==> no need for "typings.d.ts"


npm i @types/jquery
npm i @types/react
npm i @types/lodash
npm i @types/chart

===========================================================

JavaScript build tools :Grunt, Gulp, Webpack, Parcel

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, linting, bundle


Webpack: default used by react, angular, Vue

npm i webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin -D
or
yarn add webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin -D


=============
folder> npm init --y
folder> 
npm i webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin -D
or
yarn add webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin -D


folder> tsc --init


```
export default class Person {
    name:string;
    age:number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    getName():string {
        return this.name;
    }

    getAge():number {
        return this.age;
    }
}

```

webpack.config.js

package.json
"scripts": {
    "dev" :"webpack --mode development",
    "prod": "webpack --mode production"
}

src/ index.ts, compute.ts, Person.ts


npm run dev


asset bundle.js 3.95 KiB [emitted] (name: main)
./src/index.ts 511 bytes [built] [code generated]
./src/compute.ts 248 bytes [built] [code generated]
./src/Person.ts 429 bytes [built] [code generated]
webpack 5.68.0 compiled successfully in 5398 ms


--

npm run prod
==> minify
==> uglify

asset bundle.js 893 bytes [emitted] [minimized] (name: main)
./src/index.ts 511 bytes [built] [code generated]
./src/compute.ts 248 bytes [built] [code generated]
./src/Person.ts 429 bytes [built] [code generated]
webpack 5.68.0 compiled successfully in 5795 ms

===============
html-webpack-plugin

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation

index.html

<script src="bundle.js"></script>


main.565csdf21f.js ==> all my compiled ts files
vendor.232sfsdf4.js ==> from "node_modules" ==> jquery, lodash
runtime.dfdfgdf334.js ==> react, angular

helps in Hot reload

  plugins: [new HtmlWebpackPlugin({
        template:path.resolve(__dirname, "src","index.html")
    })]


  =============
  
  webpack-dev-server for starting server for development environment with live reload.

   "start": "webpack serve --open --mode production"

   npm start

==============

npm i -D css-loader style-loader

css-loader like ts-loader loads all files having "css" extension

loaded files will be placed in <style></style> by style-loader


module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"]
            }
        ]
    }

===========

Bundles
a single bundle file will be heavy on network traffic and leads to FCP issues

First Contentful Paint ==> Core Web Vitals

bundle.js is heavy

break it down into many modules:
main.module.js ==> min required for FCP

chunks.js ==> cart module

customer.js ==> 
 
============

TypeScript

Decorators are HOF / closure to introduce new properties into an object same as HOC of React

@DecoratorName({
	property1:...,
	property2:...
})
class MyClass {
	x:string;
	y:number;
}

====

@Component({
	templateUrl:'...',
	selector:....
})
class Component1 {

}


@Component({
	templateUrl:'...',
	selector:....
})
class Component2 {
	
}

=============

tsconfig.json
"experimentalDecorators": true


Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.


function Product() {

} 

Product.prototype.getName = function() {

}

===
Object.defineProperty(target.prototype, "subject", {
            "value": () => config.name
        });
  P["subject"]();

Object.defineProperty(target.prototype, "subject", {
            "value": config.name
        });  
P["subject"]

=======================

npm i -g @angular/cli

ng --version

=================

Day 2

Intro to JS
TypeScript
==> Basic types, object, enum, array, function
==> generics, interface, class
HOF ==> high order functions [ function as argument / function as return]
Closure ==> mechanism where returned function will have access to all the members of outer function
memozie pattern ==> Decorators

NodeJS, NPM / YARN
package.json
Webpack ==> rules for "ts-loader" / "css-loader" & "style-loader" / "babel-loader" 
HtmlWebpackPlugin ==> automate inclusion of bundles in html page
Webpack Dev Server ==> by default runs on 8080 port with hot reload options

===========================================================================

Rendering: data to presentation

Server Side Rendering: data to presentation on server and presentation page is sent to client [html/pdf/image], client app just needs to interpret the presentation
--> thin clients
Server side tempates
* Servlet / JSP
* ASP or ASP.NET
* PHP
* JS: EJS, JADE, PUG

Client Side Rendering: Server using RESTful or GraphQL web services will send JSON data to client

Client side web application uses templates to render the data in client machine
* jQuery Template
* Mustache {{, Handlebars #

 <div id="target">Loading...</div>
    <script id="template" type="x-tmpl-mustache">
      Hello {{ name }}!
    </script>

    <script src="https://unpkg.com/mustache@latest"></script>
    <script>
    	function renderHello() {
 		    var template = document.getElementById('template').innerHTML;
  			var rendered = Mustache.render(template, { name: 'Luke' });
       		document.getElementById('target').innerHTML = rendered;
 		}
    </script>
  </body>

===================================

SPA ==> Single Page Application
* data binding ==> one-way and two-way binding
* Modularization ==> many modules [ 	]
* DI ==> Dependency Injection
* Routers
	different URIs should display different views in a SPA

	http://amazon.com
	loads index.html
	with default content

	http://amazon.com/mobiles
		dispay mobiles in index.html

	http://amazon.com/mobiles/iPhone/13
	http://amazon.com/mobiles/Pixel
	http://amazon.com/tvs/sony
	
	http://amazon.com/cart

	1) History API
	2) navigation between views instead of pages
	3) Bookmark
	4) SEO
	5) Protection
	6) Lazy loading of modules


Options
1) React Library
2) Backbone Framework
3) AngularJS Framework (old upto v1.7)
4) Angular Framework (new v2+) ==> current version is v13
5) Vue Library

Library ==> partial solution
Framework => complete solution

React is just view library, rendering i depend on ReactDOM, ReactTv, ReactNative
Redux, axios

npm i -g @angular/cli
ng --version

ng new customerapp

creates scaffolding code using webpack internally
AngularRouting ==> N
CSS


Angular Framework building blocks:

1) Module
	AppModule, CustomerModule, ProductModule, PaymentModule

	@NgModule()
	export class CustomerModule {}

2) Component
	@Component()
	export class ProductList {
		state [ product ]
		behaviour [ CRUD operation on product]
	}

3) Services
	classes which are for business logic / api calls 	

	@Injectable()
	export class RestService {
		api calls 
	}

4) Router module
5) Directives
		can be used along with DOM or components to introduce additional behaviours which does not
		imply to CRUD 
		like highlight component, hide, show

		<customers highlight></customers>
		<button highlight></button>
6) Pipe
	to transform data

	{{date}}
	{{date | dateFormat('dd-MMM-yyy')}}

	dateFormat is a Pipe

	{{firstName | upper}}

	upper is a pipe

7) Guards
	used to protect Routes	

8) HTTPInterceptors
	intercept the request; add additional data to request before sending to server
	example: 

	{
		"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
	}

===================================================

angular.json is used by webpack internally
Entry point:
  "main": "src/main.ts"

platformBrowserDynamic().bootstrapModule(AppModule)


Module is a collection of components, services. module can use other modules

npm i @bootstrap@4.6.0 font-awesome@4.7.0

=================

download share.zip from github , extract

>npm start

Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   1.70 MB | 
polyfills.js          | polyfills     | 299.96 kB | 
styles.css, styles.js | styles        | 173.23 kB | 
main.js               | main          |   6.61 kB | 
runtime.js            | runtime       |   6.52 kB |

https://caniuse.com/

============

Bootstrap a CSS framework for RWD ==> Responsive web design

==> adopt to different devices and resolution
==> uses Grid system

A "row" is made of 12 columns irrespective of viewport width

============================================

Each component has "ts", "template html" and "css"

ng generate component customers

or

ng g c customers

generate template, css and class and adds to app.module.ts

 declarations: [
    AppComponent,
    CustomersComponent
  ]

Angular built-in Structural directives (starts with *) : *ngFor, *ngIf and *ngSwitch

<div *ngFor="let customer of customers">
    {{customer.firstName}} {{customer.lastName}}
</div>

Structural directives does DOM manipulation [ create / destroy ]

=========

ng g c customers-card

generate template, css and class and adds to app.module.ts

 declarations: [
    AppComponent,
    CustomersComponent,
    CustomersCardComponent
 ]

==================
 
[] is a property binding ==> mechaism to pass data from Parent ==> Child
In Child access it using @Input()

Parent Component:
class ParentComponent {
	elements:number[] = [34,66,2235,3];
}
parent.component.html

<child [data]="elements" ></child>


class ChildComponent {
	@Input()
	data:number[] = []
}

====


() is for event binding on child ==> an observable

class ParentComponent {
	doTask() {

	}

	someTask() {

	}
}

parent.component.html

<button (click)="doTask()">Click</button>

<child (customEvent) ="someTask()"></child>

class ChildComponent {
	@Output()
	customEvent:EventEmitter<string> = new EventEmitter<string>();
 	..
 	customEvent.emit("Hello!!!");
}

====================


Filter:

 [(ngModel)] = "searchText"

 Two-way binding [()] between Component and template
 
  <input
        type="text"
        [(ngModel)] = "searchText"
        name="searchText"
        class="novalidate form-control  mr-sm-2"
        />


to use ngModel we need FormsModule
app.module.ts
import {FormsModule} from '@angular/forms';

imports: [
    BrowserModule, FormsModule
 ],


CustomersComponent.ts
searchText:string = "";
```
 <input
                      type="text"
                      [(ngModel)] = "searchText"
                      name="searchText"
                      class="novalidate form-control  mr-sm-2"
                      (keyup) = "filterCustomers()"
                    />


  filterCustomers() {
    this.customers = this.complete.filter(c => {
      if ((c.firstName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0)
        ||
        (c.lastName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0)) {
        return true;
      }
      return false;
    });
  }
```

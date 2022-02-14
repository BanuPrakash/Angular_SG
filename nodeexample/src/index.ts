import {add, sub} from './compute';
import Person from './Person';

console.log("Hello Webpack!!!");

console.log(add(10,5));
console.log(sub(5,2));


let p:Person = new Person("Jack", 32);

console.log(p.getName(), p.getAge());

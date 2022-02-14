import {random} from 'lodash';
import {add, sub} from './compute';
import Person from './Person';
import './style.css';

console.log("Random :" + random(1,100));
console.log("Hello Webpack!!!");

console.log(add(10,5));
console.log(sub(5,2));


let p:any = new Person("Jack", 32);

console.log(p.getName(), p.getAge(), p["subject"]);

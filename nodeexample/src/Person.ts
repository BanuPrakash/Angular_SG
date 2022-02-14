export default class Person {
   
    constructor(private name:string, private age:number) {
    }

    getName():string {
        return this.name;
    }

    getAge():number {
        return this.age;
    }
}
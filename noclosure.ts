// without Closure

function fibanocci(no:number): number {
	return no === 0 || no == 1 ? no : fibanocci(no - 1) + fibanocci(no -2);
}

console.time("first");
	console.log(fibanocci(34)); //should have cached
console.timeEnd("first");

console.time("second");
	console.log(fibanocci(34)); // should have got it from cache
console.timeEnd("second");



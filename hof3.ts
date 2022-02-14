// HOF with Closure

// memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive operation

type FunctionType<T,R> = (arg:T) => R;

function memo<T,R> (fn:FunctionType<T, R>) {
	var cache:{T?,R?} = {};
	return function(args) {
		if(!cache[args]){
			cache[args] = fn(args);
		}
		return cache[args];
	}
}

function fibanocci(no:number): number {
    return no === 0 || no == 1 ? no : fibanocci(no - 1) + fibanocci(no - 2);
}

let memFib = memo(fibanocci);

console.time("first");
console.log(memFib (34));
console.timeEnd("first");
console.time("second");
console.log(memFib (34));
console.timeEnd("second");
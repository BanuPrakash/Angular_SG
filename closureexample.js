function memo(fn) {
	var cache = {};
	return function(args) {
		if(!cache[args]){
			cache[args] = fn(args);
		}
		return cache[args];
	}
}

function fibanocci(no) {
    return no === 0 || no == 1 ? no : fibanocci(no - 1) + fibanocci(no - 2);
}

let memFib = memo(fibanocci);

console.time("first");
console.log(memFib (34));
console.timeEnd("first");
console.time("second");
console.log(memFib (34));
console.timeEnd("second");

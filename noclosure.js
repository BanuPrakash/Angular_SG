// without Closure
function fibanocci(no) {
    return no === 0 || no == 1 ? no : fibanocci(no - 1) + fibanocci(no - 2);
}
console.time("first");
console.log(fibanocci(34));
console.timeEnd("first");
console.time("second");
console.log(fibanocci(34));
console.timeEnd("second");

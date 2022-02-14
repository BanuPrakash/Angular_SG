// HOF filter
function filter(elems, predicateFn) {
    var res = [];
    forEach(elems, function (e) {
        if (predicateFn(e)) {
            res.push(e);
        }
    });
    return res;
}
// HOF with Generics
function forEach(elems, action) {
    var i;
    for (i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
var nos = [6, 3, 2, 1, 5, 9];
forEach(nos, console.log);
var names = ["Sita", "Geetha", "Rita", "Raj"];
forEach(names, console.log);
var products = [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
];
forEach(products, console.log);
console.log("***********");
var res = filter(products, function (e) { return e.category === 'mobile'; });
forEach(res, console.log);

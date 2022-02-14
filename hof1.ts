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
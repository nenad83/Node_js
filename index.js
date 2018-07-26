// console.log("Hello from node-js");

// var integer1 = 5;
// var integer2 = "10";
// var sum = integer1+integer2;

// console.log(integer1+integer2);
// console.log(integer1 + "+ "+ integer2 + " =" + sum);


// var name = "NENO";
// var pass = "000000";
// var nameUpdated = console.log(name.toLowerCase());
// console.log(name.toLowerCase());


// if(nameUpdated == "neno"){
// 	console.log("Hello " + name);
// }else {
// 	console.log("Unsuccessful");
// }

// switch(name){
// 	case "Neno":
// 	console.log("Hello " + name);
// 	break;
// 	case "NENO":
// 	console.log("Hello " + name);
// 	break;
// 	default:
// 	console.log("Unsuccessful");
// }

// if (name == "Neno" || name == "iva"){
// 	console.log("Hello " + name);
// }else {
// 	console.log("Unsuccessful");
// }


// var firstname = "Nenad ";
// var lastname = "Milanovic";
// var fullname = firstname.concat(lastname); ////////concat
// console.log(fullname);


// var boolean = true;
// console.log(boolean);


// var integer = [3, 4, 5, 6, 7, 8, 9, 10, 12];


// integer[100] = 50;
// console.log(integer);

// for(let i =0; i<integer.length; i++ ){
// 	console.log(integer[i] + ": ")
// 	if(integer[i]%3 == 0){
// 		console.log("buzz");
// 	}
// 	if(integer[i] % 4 == 0){
// 		console.log("fiz");
// 	}

// 	console.log("\n");
// }

// var i = 10;
// console.log(i--);	// --i i--


var brojac = 0;

// for(let i = 10; i>brojac; i--){
// 	console.log(i);
// }

// while(brojac < 10){
// 	console.log(brojac);
// 	brojac++
// }


do{
	brojac++;
	console.log(brojac);
}
while(brojac < 10)

var names = ["iva", "ana", "marija"];
var pass = ["aa", "bb", "000"];
var myName = "ana";
var myPass = "bbb"	

for(let i =0; i<names.lenght; i++) {
	if(names[i] == myName && pass[i] == myPass){
		console.log("Logged in");
	}else{
		console.log("Error");
	}
}
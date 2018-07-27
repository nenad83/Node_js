// var niza = [1, 5, 2, 10, 18];

// var parni = [];
// var neparni = [];
// for(let i = 0; i <niza.length; i++){
// 	if (niza[i]%2 ==0) {
// 		parni.push(niza[i]);
// 	}else{
// 		neparni.push(niza[i]);
// 	}
// }
// console.log("Parni "+parni);
// console.log("Neparni " + neparni);


// var i = 5;
// var name = "5";

// console.log(isNaN(i));
// console.log(isNaN(name));


// var niza = [1, "test", 2, "Denes e 27 juli", "5"];

// for(let i =0; i<niza.length; i++){
// 	if(isNaN(niza[i])){
// 		console.log(niza[i]);
// 	}
// }


// sayHello();


// function sayHello(){
// 	console.log("Hi from function");

// }



// var x = 5, y= 10;

// console.log(zbir(x, y));

// function zbir(a, b){
// 	return a + b;
// }


// var x = function() {
// 	console.log("Hello from anonymous function"); //anonimna funkcija, treba da bide smestena vo varijabla
// }

// console.log(x);


// (function(){
// 	console.log("Hello from self-invoked function");
// }() )


// var niza = [2, "Jas", 5, "sum", 12, "Neno"];

// var finalString = "";

// for (let i = 0; i<niza.length; i++){
// 	if(isNaN(niza[i])){
// 		//finalString = finalString.concat(niza[i] + " ");
// 		finalString +=niza[i] + " ";
// 	}else {
// 		let zbir = soberiSledbenik(niza[i]);
// 		console.log(zbir);
// 	}
// }

// function soberiSledbenik(broj){
// 	let sledbenik = broj +1;
// 	return broj + sledbenik;
// }

// console.log(finalString);



// var person = {
// 	firstname: "Iva",
// 	lastname: " Pivkova",						//dokolku ne e definirana varijablata odnosno e atribut kako firstname
// 	age: 24,									//mora da stoi this.firstname
// 	sex: "F",

// 	getFullName: function(){
// 		return this.firstname + " " + this.lastname;
// 	}
// }

// console.log(person.getFullName());


// var person1 = {
// 	firstName: "Nenad",
// 	lastName: "Milanovic",
// 	age: 34,
// 	gender: "male",

// 	getNameAge: function(){
// 		return this.firstName + " " + this.age;
// 	}
// }

// // console.log(person1.getNameAge());



// var niza = [];
// niza.push(person);
// niza.push(person1);
// console.log(niza);

// // person1.firstname;
// console.log(person1["firstName"]);

// for(let i = 0; i<niza.length; i++){
// 	console.log(niza[i].firstName);
// }

// for(let i = 0; i<niza.length; i++){
// 	if(niza[i].age>=18){
// 		console.log(niza[i].getNameAge());
// 	}
// }







var house = {
	type: "house/flat"
	m2: "50",				//<60m2
	price_m2: "1000",		//< 1000
	balcony: "5",

	getFullPrice: function(){
		return (parseInt(this.m2) + parseInt(this.balcony)) * this.price_m2;
	}
}

console.log(house.getFullPrice());
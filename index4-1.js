var sentence = "Ucime js";
var word = "js";
var word2 = "Ucime"


console.log(sentence.includes(word)); // za proverka dali word se sodrzi vo sentence .includes
console.log(sentence.startsWith(word2)); //za da vidime dali zapocnuva so zborot koj sme go dale kako argument

var myModule = require("./my_module");  // se dodava moduv so ./(imeto na modulot)
var fs = require("fs");

myModule.sayHello();		// se povikuva funkcija od drug modul

var math = require("./math-module");

// math.sum(2,8);

// math.multiply(5, 8);


// var username = "IVA";
// var password = "1234";
// var email = "iva@yahoo.com";

// var validator = require("./validator-module");

// // var emailValidation = validator.emailValidator(email);
// var emailMassage = validator.getEmailMassage(email);
// console.log(emailMassage);


// // if(emailValidation) {
// // 	console.log("Vnesen e tocen email");
// // }else {
// // 	console.log("Imate vneseno pogresen email");
// // }


// var passwordValidation = validator.passValidator(password);

// if(passwordValidation) {
// 	console.log("Tocen password");
// }else{
// 	console.log("Pogresen password");
// }

// var usernameValidation = validator.userValidator(username);

// console.log(usernameValidation);


//Rabota so fs modul


// fs.readFile("myFile.txt", "utf-8", (err, data) => {
// 	if(err) throw err;

// 	else{
// 		console.log(data);
// 	}
// })


// fs.writeFile("myFile.txt", "Isuvam vo myFile2", (err) => {
// 	if(err) throw err;
// 	else{
// 		console.log("Uspesno");
// 	}
// });

// fs.appendFile("myFile.txt", "append text", (err) => {
// 	if(err) throw err;
// 	else {
// 		console.log("text added");
// 	}
// });



fs.readFile("users.json", "utf-8", (err, data)=>{
	var name = "Iva";
	if(err) throw err;

	else {
		var parsedJSON = JSON.parse(data);
		var exists = false;
		console.log("parsed data: ");

		// console.log(parsedJSON);



		// for(let i =0; i<parsedJSON.length; i++){

		// 	console.log(parsedJSON[i].name + " " + parsedJSON[i].lastname + " " + parsedJSON[i].email);
		// }

		for(let i =0; i<parsedJSON.length; i++) {
			if(parsedJSON[i].name == name) {
				console.log(parsedJSON[i].name + " " + parsedJSON[i].lastname + " " + parsedJSON[i].email);
				exists = true;
				break;
			}
		}

		if(exists == false) {
			console.log("Ne postoi takov korisnik");
		}

	}
});







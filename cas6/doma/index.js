var express = require("express");
var app = express();
var path = require("path");
var user = require("./user");


app.listen(3000);
app.set("view engine", "ejs");

var user1 = new user.create("Petko", "Petkov");
var user2 = new user.create("Mitre", "Mitrev");
var user3 = new user.create("Ana", "Anna")

var all_user = [user1, user2, user3];


app.get("/", (req, res)=>{
	var filePath = path.join(__dirname + "/views/conan_battle_calculator.html");

	var name = req.query.name;

	// all_user.forEach(i => {
	// 	if(name == i.firstName) {
			// res.render("conan_battle_calculator");
			res.sendFile(filePath);
		// }
	});




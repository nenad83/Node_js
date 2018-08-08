var express = require("express");
var app = express();
var myParser = require("body-parser");
var user = require("./user");


app.set("view engine", "ejs");
app.use(myParser.urlencoded({extended: true}));		//za da raboti so post parametri 


app.listen(3000);

var korisnici = [];

app.get("/", (req, res) => {

	var name = "Neno";

	res.render("register", {myName: name});


});

app.get("/register", (req, res) =>{

	res.render("register");

});

app.post("/save", (req, res) =>{

	var name = req.body.firstName;				//imeto so e vo register.ejs

	var password = req.body.password;

	// res.send(name);

	res.send(password);

});


// app.post("/pass", (req, res) => {

// 	var password = req.body.password;
// 	res.send(password);
// });



app.post("/register", (req, res) =>{

	var fname = req.body.firstName;
	var lname = req.body.lastName;
	var email = req.body.email;
	var pass = req.body.pass1;
	var passConfirm = req.body.pass2;

	if(pass == passConfirm){
		var korisnik = new user.create(fname, lname, email, pass); 
		korisnici.push(korisnik);

	}else {
		res.render("register");
	}

	res.render("login");

	// console.log(fname + " " + lname + " " + email + " " + pass + " " + passConfirm);

	// res.send(pass);

	console.log(korisnici);

});


app.get("/login", (req, res) =>{
	res.render("login");
});


app.post('/login', (req, res) => {
	var email = req.body.email;
	var pass = req.body.pass;

	korisnici.forEach (k => {

		if(k.email == email && k.pass == pass) {
			res.send("Uspesno Logiran");
		}
	})

	res.render("login");
});

app.get("/users", (req, res) =>{
	res.render("users", {users: korisnici});
});


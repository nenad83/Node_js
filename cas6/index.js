
var express = require("express");
var app = express();
var path = require("path");

var user = require("./user");
var article = require("./article");


app.listen(3000);			//za kreiranje na server
app.set("view engine", "ejs");

// app.get("/", (req, res)=>{
// 	//var file = path.join(__dirname + "/index.html");

// 	//res.sendFile(file);

// 	res.render("index");

// });


// app.get("/users", (req, res)=>{		//za kreiranje 

// 	//res.send("Users");
// 	var filePath = path.join(__dirname + "/users.html");
// 	// res.sendFile(path.join(__dirname + "/users.html")); // pateka so path za da ne se pisuva celosnata pateka do fileot
// 	res.sendFile(filePath);


// });

// app.get("/myPage", (req, res)=>{
// 	var fileMyPage = path.join(__dirname + "/mypage.html")

// 	//res.send("My page");
// 	res.sendFile(fileMyPage);

// });


// app.post("/myPage", (req, res)=>{

// 	res.send("My page");

// });


// app.get("/user", (req, res) =>{

// 	var id = req.query.id;
// 	console.log(id);

// });



			//RABOTA SO ejs


var user1 = new user.create("Petko", " Petkov", "petko@yahoo.com", "18");
var user2 = new user.create("Mirko", " Mirko", "mirko@yahoo.com", "29");
var user3 = new user.create("Ana", " Ana", "ana@yahoo.com", "8");

var usre_objects = [user1, user2, user3];




// app.get("/", (req, res)=>{

// 	var name = "Iva"

// 	res.render("index", {firstName : name});

// });		


// app.get("/users", (req, res) => {
// 	res.render("users");
// });

// var users = ["Ana", "Sanja", "Neno", "Marko"];

app.get("/user", (req, res) => {

	var name = req.query.name;

	usre_objects.forEach(u =>{
		if(name == u.firstName) {
			res.render("user", {user: u})
		}

	});

	res.render("errorPage");

	// var id = req.query.id;
	// var user = users[id];

	// console.log(user);
	// res.render("user", {firstName : user});
	// res.render("user", {user : user1});

});


var article1 = new article.create(1, "Example", "Example content");

app.get("/article", (req, res) => {

	var title = req.query.title;
	if(title == article1.title) {
		res.render("article", {a : article1});
	}

	res.render("errorPage");


	

});


//za doma da se kreira nekoj nov proekt. na ruta / da se prikaze strana wlcome ______(name) koe ke se zadade
// kako query parametar

//da se kreiraaat povekje messages objekti koi ke sodrzat id, sender, kontent

//na ruta /messages?id(nekoj broj), da se prikazat ako ne eror.





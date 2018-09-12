const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://admin:admin1@ds151012.mlab.com:51012/cas9";
var db;
const express = require("express");
const app = express();
const recipe = require("./recipe");
const bodyParser = require("body-parser");
const session = require("express-session");

var sess;

app.listen(3000);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: "cas9"}));

mongoClient.connect(url, (err, client) => {
	if(err) console.log(err);
	else {
		db = client.db("cas9");
		console.log("Connected");

		// var myObject = {
		// 	name: "Iva",
		// 	age: 25

		// };
		// db.collection("test").insertOne(myObject, (err, ) => {		//insert object vo databaza
		// 	if(err) console.log(err);
		// 	else{
		// 		console.log("One object inserted in db");
		// 	}
		// });

		// db.collection("test").findOne({name: "Iva"}, (err, result) => {
		// 	if(err) console.log(err);
		// 	else {
		// 		console.log(result);
		// 	}
		// });


		// var changedObject = {
		// 	name: "Iva",
		// 	age: 30
		// }
		// var myquery = {name: "Iva"};
		// var newValues = {$set: changedObject};

		// db.collection("test").updateOne(myquery, newValues, (err) => {
		// 	if(err) console.log(err);
		// 	else {
		// 		console.log("One document updated");
		// 	}
		// });
	}
});


app.get("/", (req, res) => {
	res.render("index");
});

app.get("/login", (req, res) => {
	res.render("login");
})


app.post("/login", (req, res) => {
	sess = req.session;
	sess.email = "123"

	res.redirect("/newRecipe");
})


app.get("/newRecipe", checkPermissions(), (req, res) => {
	// sess = req.session;
	res.render("newRecipe");

});


app.post("/newRecipe", (req, res) => {
	let recName = req.body.recName;
	let ingridients = req.body.ingridients;
	let prepTime = req.body.prepTime;

	let r = new recipe.create(recName, ingridients, prepTime);
	console.log(r);



	db.collection("recipes").insertOne(r, (err) => {
		if(err) console.log(err);
		else {
			console.log("new recipe added");
			res.redirect("allRecipes");
		}
	})
});

app.get("/allRecipes", (req, res) => {
	db.collection("recipes").find({}).toArray((err, result) => {
		// res.send(result);
		res.render("allRecipes", {recipes: result});
	})
});


app.get("/recipes", (req, res) => {

	let time = req.query.time;

	// db.collection("recipes").find({prepTime: time}).toArray((err, result)=> {
	// 	res.send(result);
	// });

	db.collection("recipes").find({ingridients: {$regex: ".*eggs.*"}}).toArray((err, result) => {
		// res.send(result);
		res.render("allRecipes", {recipes: result});
	});
});




function checkForSession(req){

	sess = req.session;

	if(sess.email) {
		return true;
	}
	else{
		return false;
	}

};


function checkPermissions() {
	return(req, res, next) => {
		sess = req.session
		if(sess.email){
			next();
		else {
			res.redirect("/");
		}
	}
}
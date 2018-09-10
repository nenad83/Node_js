const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://admin:admin1@ds151012.mlab.com:51012/cas9";
var db;
const express = require("express");
const app = express();
const recipe = require("./recipe");
const bodyParser = require("body-parser");

app.listen(3000);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

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


app.get("/newRecipe", (req, res) => {
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
			res.render("allRecipes");
		}
	})
});

app.get("/allRecipes", (req, res) => {
	db.collection("recipes").find({}).toArray((err, result) => {
		res.render("allRecipes", {recipes: result});
	})
});


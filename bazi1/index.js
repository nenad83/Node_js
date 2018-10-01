var express = require("express");
var app = express();
var auth = require("./handlers/auth");
var root = require("./handlers/root");
var users = require("./handlers/users");
var mongoose = require("mongoose");
var mongo = require("./db/mongo");

mongo.Init();


// const options = {
//   useNewUrlParser: true
// }

// mongoose.connect("mongodb://127.0.0.1:27017/semos1", options);
// .then((conn) => {
// 	console.log(conn);
// });
// .catch((err) => {
// 	console.log(err);
// });



app.get("/", root);

app.post("/login", auth.login);

app.post("/logout", auth.logout);

app.get("/users/name/:name", users.getUserByName);

app.listen(3000);
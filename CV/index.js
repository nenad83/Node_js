var express = require("express");
var bodyParser = require("body-parser");
var jwt = require('express-jwt');
var mongoose = require("mongoose");
var mongo = require("./db/mongo");
var root = require("./handlers/root");
var auth = require("./handlers/auth");
var cvs = require("./handlers/cvs");


mongo.Init();

var app = express();
app.use(bodyParser.json());

app.use(jwt({
		secret: "pero_e_haker"
	}).unless({
	path:["/login"]
	})
);

app.get("/", root.home);

app.post("/login", auth.login);
app.post("/logout", auth.logout);

app.get("/cvs", cvs.getAllCvs);
app.get("/cvs/name/:name", cvs.getCvsByName);
app.delete("/cvs/delete/:id", cvs.deleteCvsById);
app.post("/cvs/create", cvs.createCv);
app.put("/cvs/:id", cvs.updateById);



app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token');
  }
});





app.listen(3000);
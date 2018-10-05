var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var mongo = require("./db/mongo");
var root = require("./handlers/root");
var auth = require("./handlers/auth");
var cvs = require("./handlers/cvs");


mongo.Init();

var app = express();
app.use(bodyParser.json());

app.get("/", root.home);

app.post("/login", auth.login);
app.post("/logout", auth.logout);

app.get("/cvs", cvs.getAllCvs);
app.get("/cvs/name/:name", cvs.getCvsByName);
app.delete("/cvs/delete/:id", cvs.deleteCvsById);
app.post("/cvs/create", cvs.createCv);
app.put("/cvs/:id", cvs.updateById);





app.listen(3000);
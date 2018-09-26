var express = require("express");
var app = express();
var auth = require("./handlers/auth");
var root = require("./handlers/root");




app.get("/", root);

app.post("/login", auth.login);

app.post("/logout", auth.logout);

app.listen(3000);
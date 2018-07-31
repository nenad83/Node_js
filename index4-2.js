var http = require("http");
var url = require("url");


// http.createServer(function(request, response) {


// console.log("port 3000");

// response.writeHead(200, "OK");

// response.write("Zdravo");
// response.end();

// }).listen(3000);				/// 8080, 1337, 3000, 8000, 4000 slobodni portovi 




// http.createServer(function(request, response) {


// console.log("port 3000");

// console.log(request.url);

// if(request.url == "/users"){
// 	response.writeHead(200, "OK");
// 	response.write("Users page");
// 	response.end();
// }else if(request.url == "/messages") {
// 	response.writeHead(200, "OK");
// 	response.write("Welcome to users mesages");
// 	response.end();	
// }

// else {
// 	response.writeHead(404, "Not found");
// 	response.write("Page not found");
// 	response.end();
// }

// }).listen(3000);



http.createServer(function(request, response) {

	var q1 = url.parse(request.url, true).query;

	console.log(q1);

// response.writeHead(200, "OK");

response.write(q1);
response.end();


}).listen(3000);
var jwt = require('jsonwebtoken');


var companyRegister = (req, res)=> {
	res.send("Registriraj se kako kompanija");
};

var userRegister = (req, res)=> {
	res.send("Registriraj se kako user");
};

var login = (req, res)=> {
	// res.send("Log in");
	if(req.body.email == "admin@admin.com" && req.body.password == "a") {
		var userData = {
			uid: 1234567890,
			email: "admin@admin.com",
			name: "Pero Perovski",
			avatar: "slika.jpg"
		};
		var token = jwt.sign(userData, 'pero_e_haker');
		res.send(token);
	} else {
		res.status(404).send("Invalid username and password");
	}
};

var logout = (req, res)=> {
	res.send(req.user);
};

module.exports = {
	companyRegister,
	userRegister,
	login,
	logout
};
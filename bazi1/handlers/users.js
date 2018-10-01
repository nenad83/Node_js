var users = require("../models/users");

var getAllUsers = (req, res)=> {
	users.getAllUsers((err, data)=> {
		if(err){
			res.status(500).send("Internal server error!" + err);
		}else {
			res.send(data);
		}
	});

};


var getUserByName = (req, res) => {
	var name = req.params.name;
	users.getUsersByName(name, (err, data) => {
		if(err){
			res.status(500).send(err);
		}else {
			res.send(data)
		}
	});
}

module.exports = {
	getAllUsers,
	getUserByName
};
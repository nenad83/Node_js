var condition = true;

var users = [
			"petko",
			"stanko",
			"trajko"
		];

var getAllUsers = () => {

	return new Promise ((resolve, reject) => {
		var users = [
			"petko",
			"stanko",
			"trajko"
		];

	if(condition == true){
		return resolve (users);
		// console.log(users);
	}else {
		return reject ("no users found");
	}
	});
};


var calculate = (users) => {
	return new Promise ((resolve, reject) => {
		if(users.length == 0) {
			return reject ("Error");
		} else {
			var total = 0;
			for(let i = 0; i<users.length; i++){
				total += users[i].length;
			}
			return resolve(total);
		}
	})
}

getAllUsers()
.then((i) => {
	return calculate(i);
});
.then((total)=> {
	console.log(total);
});

.catch((err) => {
	console.log(err);
});

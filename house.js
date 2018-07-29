var house1 = {
	type: "house",
	m2: 55,
	price_m2: 1000,
	balcony: 5
}

var house2 = {
	type: "house",
	m2: 95,
	price_m2: 1200,
	balcony: 7
}

var house3 = {
	type: "flat",
	m2: 48,
	price_m2: 800,
	balcony: 2
}

var house4 = {
	type: "flat",
	m2: 59,
	price_m2: 750,
	balcony: 2
}

var house5 = {
	type: "house",
	m2: 55,
	price_m2: 970,
	balcony: 3
}

var house6 = {
	type: "flat",
	m2: 70,
	price_m2: 110,
	balcony: 2
}

var house7 = {
	type: "house",
	m2: 120,
	price_m2: 2000,
	balcony: 8
}

var house8 = {
	type: "house",
	m2: 71,
	price_m2: 1700,
	balcony: 6
}

var house9 = {
	type: "flat",
	m2: 45,
	price_m2: 700,
	balcony: 2
}

var house10 = {
	type: "house",
	m2: 90,
	price_m2: 1100,
	balcony: 5
}


var prebaraj = [];
prebaraj.push(house1);
prebaraj.push(house2);
prebaraj.push(house3);
prebaraj.push(house4);
prebaraj.push(house5);
prebaraj.push(house6);
prebaraj.push(house7);
prebaraj.push(house8);
prebaraj.push(house9);
prebaraj.push(house10);


function searchHouse () {
	for(let i = 0; i<prebaraj.length; i++){
		if(prebaraj[i].m2 < 60 && prebaraj[i].price_m2 < 1000){
			console.log("This is " + prebaraj[i].type + " with " + prebaraj[i].m2 + " m2, and the price is " +
			prebaraj[i].price_m2 + " for m2."	);
	}
	}
}

console.log(searchHouse());

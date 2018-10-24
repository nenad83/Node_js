// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((data) => {
//     return data.json();
// })
// .then((u) => {
//     console.log(u);
// })
// .catch((err) => {
//     console.error(err);
// })



// var condition = true;

// var getAllUsers = () => {
//     return new Promise((resolve, reject) => {
//         var users = [
//             'janko',
//             'petko',
//             'stanko',
//             'stojanko'
//         ];
//         if(condition == true){
//             return resolve(users);
//         } else {
//             return reject('no users found');
//         }
//     });
// };

// var calculateUsers = (users) => {
//     return new Promise((resolve, reject) => {
//         if(users.length == 0){
//             return reject("can't have 0 users");
//         } else {
//             var total = 0;
//             for(let i = 0; i < users.length; i++){
//                 total += users[i].length;
//             }
//             return resolve(total);
//         }
//     });
// }

// // console.log(getAllUsers());

// getAllUsers()
// .then((u) => {
//     return getAllUsers(u);
// })
// .then((total) => {
//     console.log(total);
// })
// .catch((err) => {
//     console.error(err);
// });



// real worl example with fetch

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((data) => {
//     return data.json();
// })
// .then((p) => {
//     console.log(p);
// })
// .catch((err) => {
//     console.error(err);
// })



var a = 5;
var b = 8;

var sum = (x,y) => {
	return new Promise ((resolve, reject) => {
		if(x == 5){
			return resolve("OK");
			consloe.log("OK");
		}else {
			return reject("Not OK")
		}

	});
};

sum(a,b);
.then((x) =>{
	console.log(x);
})
.catch((err) => {
	console.log(err);
})
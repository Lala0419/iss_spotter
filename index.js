// const { fetchMyIP } = require("./iss");
const { fetchCoordsByIP } = require("./iss");
// fetchMyIP((error, ip) => {
// 	if (error) {
// 		console.log("It didn't work!", error);
// 		return;
// 	}

// 	console.log("It worked! Returned IP:", ip);
// });
const ip = "8.8.4.4.";
fetchCoordsByIP(ip, (error, data) => {
	if (error) {
		console.log("it didn't work!", error);
		return;
	} else {
		console.log("It worked!", data);
	}
});

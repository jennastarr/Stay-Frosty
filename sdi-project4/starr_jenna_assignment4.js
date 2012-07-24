alert("JavaScript works!");

// Does a string follow a 123-456-7890 pattern like a phone number?

var numberCheck = function(lookDigit){
	var testNumber = lookDigit;
	var digits = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$;

if (digits.test(testNumber)){
	var realNumber = testNumber.replace
	console.log("You are right, it is a real phone number!");
	}
	else{
		return console.log("No, that is not a phone number.");
	}
};
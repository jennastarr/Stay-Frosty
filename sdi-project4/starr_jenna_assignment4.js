alert("Project 4 the ReMix!");


// 2. Format a number to use a specific number of decimal places, as for money: 2.1 ➜ 2.10
/*
A code for displaying limited decimal points. This code acts as a boundary set when displaying
number with numerous decimal points. You are able to simply adjust the "toFixed" are to set
the limit of decimal places you would like shown.
*/

	var libRary = function(){
	var decimal = function ( deciNumber ){
		var deciNum = 723.1980;
		return library.deciNumber = deciNum.toFixed(2)
	};



// 2. Does a string follow a 123-456-7890 pattern like a phone number?
/*
 With this code we are providing a string of numbers in a phone number format and
 have it go through a series of steps to validate that it does or does not meet the
 parameters of a phone number.
*/
	var phoneNum = function ( number ) {
		if ( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) {
		return library.number = 816-867-5309;
		} else {
		return library.number = false;
		};
	};
	
	
//Return Sector

	return{
	"decimal": decimal,
	"phoneNum": phoneNum,
	
	
// Library resource. Calling point for the code.	
var library = libRary();

// Problem 1
library.decimal(723.1980);

// Problem 2
library.phoneNum(true);
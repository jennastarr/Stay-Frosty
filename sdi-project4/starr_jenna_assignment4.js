alert("Project 4 the ReMix!");


// Format a number to use a specific number of decimal places, as for money: 2.1 ➜ 2.10
/*
A code for displaying limited decimal points. This code acts as a boundary set when displaying
number with numerous decimal points. You are able to simply adjust the "toFixed" area to set
the limit of decimal places you would like shown.
*/

	var libRary = function(){
	var decimal = function ( deciNumber ){
		var deciNum = 723.1980;
		return library.deciNumber = deciNum.toFixed(2)
	};



// Does a string follow a 123-456-7890 pattern like a phone number?
/*
 With this code we are providing a string of numbers in a phone number format and
 have it go through a series of steps to validate that it does or does not meet the
 parameters of a phone number.
*/
	var phoneNum = function ( number ) {
		if ( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) {
		return library.number = 8168675309;
		} else {
		return library.number = false;
		};
	};
	
// Title-case a string (split into words, then uppercase the first letter of each word.)
/*
Providing a phrase or statement where you want just the first letter of each word to be
uppercase is not something you have to go through and do manually. You can provide the 
location of which letters you wold like to be made uppercase within this function.
*/
fixCase("zombie nation");
function fixCase(fixThis) {
    String.prototype.toProperCase = function () {

        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
	fixThis.toProperCase();
    console.log(fixThis.toProperCase()); 
};

// Is the string a URL? (Does it start with http: or https:?)
/*
We give a proper link within this code to be analyzed in the beginning. For the console
log we concatenate to confirm or deny if it is a http or https. This is done by telling
the code to look at the 4th location and if it sees one thing or another to log out
said string.
This code also does another job by identifying if it is a true URL.
*/
var urlString = function (urlTest, url){
		if (location.protocol === 'http:')
		return library.check = url.check(urlCheck)
		return library.check = "http://www.fullsail.com"
	};
	
/* 
I re-watched videos and found another way of doing this problem but i prefer the
information the code below provides. I did not know how to get the codes combined to
give both things.
*/	
checkUrl("http://www.fullsail.com/");

function checkUrl(testLink) {
    var url = testLink
    var link = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    var isLink = link.test(url);
    console.log("This is a " + isLink + " URL.");
    if (url.charAt(4) == "s") {
        console.log("This is a https URL");
    }
    if (url.charAt(4) == ":") {
        console.log("This is a http URL");
    };
};

// Does a string follow an aaa@bbb.ccc pattern like an email address?
/*
Given an email address, parameters are given within the code to check against the email
address. If these are met then console log will give you a negative or affirmative response.
*/

var emailAddy = function ( emailCheck ){
		var atCheker  = emailCheck.indexOf("@");
		var dotCheker = emailCheck.indexOf(".");
		if (atCheker != -1 && dotCheker != -1) {
			return library.emailCheck = "checkyoself@prodigy.com";
		} else {
			return library.emailCheck = "invalid";
		};
	};
	
// Find the smallest value in an array that is greater than a given number.
	var array = function ( arrayOf ){
		var arrayName = [2, 4, 6, 8, 10];
		return library.arrayOf = arrayName.indexOf(8);
		};

// Given a string that is a list of things separated by a given string, as well as another string separator , return a string with the first separator changed to the second: "a,b,c" + "," + "/" ➜ "a/b/c".
	var stringSep = function (string, past, present) {
		var stringOne = string,
		end = new RegExp(past, "g"); // RegExp: Creates a regular expression object for matching text with a pattern.
		stringOne = stringOne.replace(end, present);
		return library.sting = stringOne;
	};
	

	
	
//Return Sector

	return{
	"decimal": decimal,
	"phoneNum": phoneNum,
	"urlString": urlString,
	"emailAddy": emailAddy,
	"array": array,
	"stringSep": stringSep
	};
};
	
	
// Library resource. Calling point for the code.	
var library = libRary();

library.decimal(723.1980);

library.phoneNum(true);

library.urlString(true);

library.emailAddy("checkyoself@prodigy.com");

library.array(2);

library.stringSep("a, b, c", ",", "/");


console.log(library);


var motivation = "Keep it moving!"
console.log(motivation);
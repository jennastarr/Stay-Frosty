alert("JavaScript works!");



// Does a string follow a 123-456-7890 pattern like a phone number?
/*
 With this code we are providing a string of numbers in a phone number format and
 have it go through a series of steps to validate that it does or does not meet the
 parameters of a phone number.
*/
numberChecking = ("816-867-5209");

// getting anonymous function does not always return value.
var numberChecking = function(lookDigits){ 
        var validPhoneNumber = lookDigits;
        // using the var listing has it look through the three sections of digits to verify it is a phone number.
        var listing = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if (listing.test(validPhoneNumber)) { 
            var realNumber = validPhoneNumber.replace(pattern, "($1) $2-$3" );
            
            //console log gives a string validation if it is either correct or incorrect.
            console.log("This is a phone number.");
        } else {
            return console.log("You must first dial a 1."); 
        }
	}

// Format a number to use a specific number of decimal places, as for money. 2.1 - 2.10
/*
A code for displaying limited decimal points. This code acts as a boundary set when displaying
number with numerous decimal points. You are able to simply adjust the "toFixed" are to set
the limit of decimal places you would like shown.
*/
// Declaring a number with four points as a baseline.
fixPoints(723.1980);

// Setting parameters to my functions and variables.
function fixPoints(digitPoints) {
    var digits = digitPoints
// Designating what point to be limited to displaying.    
    digits.toFixed(2)
    return console.log(digits.toFixed(3));
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
}

var motivation = "Keep it moving!"
console.log(motivation);
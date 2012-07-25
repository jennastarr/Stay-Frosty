alert("Project 4!");



// 1. Does a string follow a 123-456-7890 pattern like a phone number?
/*
 With this code we are providing a string of numbers in a phone number format and
 have it go through a series of steps to validate that it does or does not meet the
 parameters of a phone number.
*/

// getting anonymous function does not always return value.
var checkNum = function (testDigits) {
        var phoneNumber = testDigits;
        var listing = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if (listing.test(phoneNumber)) { 
        
        // using the var listing has it look through the three sections of digits to verify it is a phone number.
        
            var realPhoneNumber = phoneNumber.replace(listing, "($1) $2-$3");
            
            // console log out put validates whether it is or isn't a real phone number.
            console.log("Affirmative, this is a phone number."); 
        } else {
            return console.log("You must first dial a one when using this number."); 
        };
    };

checkNum("816-867-5309");
    
    
// 2. Format a number to use a specific number of decimal places, as for money. 2.1 - 2.10
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


// 3. Title-case a string (split into words, then uppercase the first letter of each word.)
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

//  4. Is the string a URL? (Does it start with http: or https:?)
/*
We give a proper link within this code to be analyzed in the beginning. For the console
log we concatenate to confirm or deny if it is a http or https. This is done by telling
the code to look at the 4th location and if it sees one thing or another to log out
said string.
This code also does another job by identifying if it is a true URL.
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



var motivation = "Keep it moving!"
console.log(motivation);
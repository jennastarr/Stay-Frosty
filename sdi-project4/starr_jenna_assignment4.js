alert("JavaScript works!");

// Does a string follow a 123-456-7890 pattern like a phone number?
/*
 With this code we are providing a string of numbers in a phone number format and
 have it go through a series of steps to validate that it does or does not meet the
 parameters of a phone number.
*/
numberChecking = ("8166-867-5209");

var numberChecking = function (lookDigits) {
        var phoneNumber = lookDigits;
        // using the var listing has it look through the three sections of digits to verify it is a phone number.
        var listing = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if (listing.test(validPhoneNumber)) { 
            var realNumber = validPhoneNumber.replace(pattern, "($1) $2-$3");
            
            //console log gives a string validation if it is either correct or incorrect.
            console.log("Valid phone number!");
        } else {
            return console.log("Invalid phone number!"); 
        }
    }

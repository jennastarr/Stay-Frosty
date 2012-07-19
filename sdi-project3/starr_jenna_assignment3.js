//Jenna Starr
//July 19th, 2012
//Project 3
//Zombie fitness story line.

alert("No brains, no gain!");

// return boolean
/*
 function getValue(){
         var myValue = 4*3;
         return myValue;
    }
    function fill(){
         var x = getValue();
         document.form1.tmp.value = x;
    }
*/
// return array
/*
function zombieList() {
        var zombieList = zombie Listing(3);
        zombieList[0] = "A",
        zombieList[1] = "B",
        zombieList[2] = "C"
        
        return zombieList;
   };
   

   function showArray(theArray){
        var quote = "";
        for (var i = 0; i < theArray.length; i++){
            quote += theArray[i] + " ";
        }
        return quote;  
 var beginning= (true)
function start(beginning)
{
    if (start("Do you want to visit " + beginnig + " site.")) {
      return true;
    } else {
      return false;
    }
};
*/

// global variable
var motivation = "Keep it moving!"

console.log(motivation);

// json
var secTitle = {
	"secTitle": "Next Level",
	"brains needed": 26,
	"miles": 22, 
	"locker combo":[ 1,4,8,2]
	
};
console.log (secTitle);


 // for loop
 for (var brainLvl = 26; brainLvl > 0; brainLvl--) {
	console.log("You have " + brainLvl + " brains to get.");
};

console.log("Don't believe what anyone says, you're going places.");

 
  // while loop
  var miles = 22;
  while (miles > 0) {
  console.log(miles + " left to go!");
  miles--;
  
};

console.log("You made it to the next level, congratulations!");




//object
var zombieR = {
	level: "Runner",
	name: "Heidi",
	interests: [
	"Running",
	"Eating Brains",
	"Groaning"
	],
	age: 32,
	saySomething: function () {
		console.log ("Brainsssssss");
	}
};
var key = "name";
zombieR.name = "Heidi";

console.log(zombieR[key] );
console.log(zombieR["saySomething"] );
console.log(zombieR.saySomething );

zombieR.saySomething();

zombieR.saySomething= function() {
	console.log("Uhhhhhhh");
};

zombieR["saySomething"]();

for (var key in zombieR) {
	console.log("key: " + key + ", value: ", zombieR[key]);
};

// object method function

var zombieL = {
	"name": "Hans",
	"level": "Lifter",
	"brainseaten": 27,
	"Hans": function(){
		// completeHans = this.name * this.level * this.brainseaten;
		// console.log("My zombie is " + completeHans);
		},
		"getHans": function(){
		zombieInfo = this.name * this.level * this.brainseaten;
		return zombieInfo;
		}

};

console.log("My zombie is " + zombieL.getHans());
	



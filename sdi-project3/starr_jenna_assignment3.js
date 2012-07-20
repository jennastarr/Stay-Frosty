//Jenna Starr
//July 19th, 2012
//Project 3
//Zombie fitness story line.

alert("No brains, no gain!");
// return object, string
var getIntro= function(name){
	var currentHour =(new Date()).getHours(),
		timeOfDay, greeting;
	if (currentHour < 12) { timeOfDay = "morning"; }
	else if (currentHour < 17) { timeOfDay = "afternoon"; }
	else { timeOfDay = "evening"; }
	greeting = "Good " + timeOfDay + " , " + name + "!" ;
	
	return greeting;
};
var fullIntro = getIntro(" Fresh Meat");
console.log(fullIntro);


// return array

var zombieList = function () {
	var names = ["Heidi", "Hans", "Grandpa"];
	var eaten = [32,27,72];
		var level = names * eaten 
		return level;
};

var reportLevel = function (name , level, message){
	console.log(name[1] + " has eaten " + eaten[1]);
};
/*
var zombieList= function() {
        var zombieList = [
        "Hydrator",
        "Lifter",
        "Runner"
        ];
        return zombieList;
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
	eaten: 32,
	saySomething: function() {
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
/**/
var hans = {
	"name": "Hans",
	"level": 4,
	"eaten": 27,
	"Hans": function(){
		var completeHans = name * level * eaten;
		console.log("My zombie is " + completeHans);
		},
// Method:Accessor
		"getHans": function(){
		var zombieInfo = this.name * this.level * this.eaten;
		return zombieInfo;
		}
};
// Missing something, console log shows My Zombie is NoN.
console.log("My zombie is: " + hans.getHans());

// Object Method Mutator
var zombie = function(level, eaten, height){
		var name = "Grandpa";
		
		this.area= function(){
			var totalArea = level * eaten * height;
			console.log("Total " + totalArea);
			};
		this.getArea = function(){
		var newArea = level * eaten * height;
		return newArea;
		}
		this.setEaten = function(newEaten){
			eaten = newEaten;
		};
};

var zombieH = new zombie (26,72, 76);
var newZombie = new zombie (31, 73, 75);
console.log("grandpa:" + zombieH.getArea());
newZombie.setEaten(75);
console.log("More brains eaten, less patrons:" + newZombie.getArea());

var gymMem = function(givenCash) {
	 var pricePerMonth = 36,
	 	perWeek;
	 if (givenCash < pricePerMonth){
	 console.log("You aren't coming in for that much!");
	 perWeek = 0;
	}
	else {
		perWeek = Math.floor(givenCash / pricePerMonth);
	}
	return perWeek;
};

 var gotGym = gymMem (1);
 console.log("Thanks for paying " + gotGym + " your` a membership!");
 
	
	



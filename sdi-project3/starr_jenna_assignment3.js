//Jenna Starr
//July 19th, 2012
//Project 3
//Zombie fitness story line.

alert("No brains, no gain!");

// return boolean

// return array
var zombieList = function () {
	var names = ["Heidi", "Hans", "Grandpa"];
	var eaten = [32,27,72];
		var level = names * eaten 
		return level;
};

var reportLevel = function (name , level, message){
	console.log(name + " has eaten " + level + message);
};

var zombieList= function() {
        var zombieList = [
        "Hydrator",
        "Lifter",
        "Runner"
        ];
        return zombieList;
   };
  
 

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

var hans = {
	"name": "Hans",
	"level": "Lifter",
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
console.log("My zombie is " + hans.getHans());

// Object Method Mutator
var zombieH = function(level, eaten){
		var name = "Grandpa";
		
		this.area= function(){
			var totalArea = level * eaten;
			console.log("Total " + totalArea);
			};
		this.area = function(){
		var newArea = level * eaten;
		return newArea;
		}
		this.setEaten = function(newEaten){
			eaten = newEaten;
		};
};

// Still getting NoN. 
var grandpa = new gpa ("Hydrator",72);
var newGpa = new gpa ("Relic", 73);
console.log("grandpa:" + zombieH.getArea());
console.log("newGpa:" + newgpa.getArea());
newgpa.setEaten(75);
console.log("More brains eaten, less patrons:" + newGpa.getArea());
/*
var cube = function(length, width, height){
		var name = "My Cube";
		
		this.area= function(){
			var totalArea = length * width * height;
			console.log("Total area " + totalArea);
		};
		this.getArea = function(){
		var newArea = length * width * height;
		return newArea;
		};
		this.setHeight= function(newHeight){
			height=newHeight;
		};
};


var myCube = new cube (10,10,10);
var newCube = new cube (7,8,9);
console.log("myCube:" + myCube.getArea());
console.log("newCube:" + newCube.getArea());
newCube.setHeight(20);
console.log("Area with our new height:" + newCube.getArea());

		

*/
	
	



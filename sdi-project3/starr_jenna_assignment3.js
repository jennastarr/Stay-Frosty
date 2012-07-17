//Jenna Starr
//July 19th, 2012
//Project 3
//Zombie fitness story line.

alert("No brains, no gain!");

//global variable

var motivation = "Keep it moving!"

console.log(motivation);

// json
var secTitle = {
	"secTitle": "Next Level",
	"brains needed": 26,
	"miles": 22
	
};
console.log (secTitle);
// loop x3

 // for loop
 for (var brainLvl = 26; brainLvl > 0; brainLvl--) {
	console.log(brainLvl + " brains left to get.");
};

console.log("Don't believe what anyone says, you're going places.");

 /*
 for (i=0; i<5; i++)
  {
  x=x + "The number is " + i + "<br />";
  }
*/  
  // while loop
  var miles = 1;
  while (miles > 1) {
  console.log(mile + " down!");
  mile--;
};
console.log("You made it to the next level, congratulations!");




//object
var zombie = {
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
zombie.name = "Heidi";

console.log(zombie[key] );
console.log(zombie["saySomething"] );
console.log(zombie.saySomething );

zombie.saySomething();

zombie.saySomething= function() {
	console.log("Uhhhhhhh");
};

zombie["saySomething"]();

for (var key in zombie) {
	console.log("key: " + key + ", value: ", zombie[key]);
};



// argument x5

// method x4

// property x5

// return x5
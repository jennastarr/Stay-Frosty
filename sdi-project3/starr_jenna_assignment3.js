//Jenna Starr
//July 19th, 2012
//Project 3
//Zombie fitness story line.

alert("No brains, no gain!");

//global variable

var motivation = "Keep it moving!"

console.log(motivation);

// loop x3

/* for loop
 for (i=0; i<5; i++)
  {
  x=x + "The number is " + i + "<br />";
  }
  
  while loop
  while (i<5)
  {
  x=x + "The number is " + i + "<br />";
  i++;
  }
*/

// json
var secTitle = {
	"secTitle": "Next Level",
	"brains needed": 2,
	"miles": 22
console.log ("miles");
};

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